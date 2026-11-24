export const id = 364;
export const ids = [364];
export const modules = {
  61518: (BB, jB, zB) => {
    function QB(BB) {
      return BB.features.has("timestamp-query")
    }

    function nB(BB) {
      return QB(BB) ? {
        device: BB,
        markerPipeline: BB.createComputePipeline({
          layout: "auto",
          compute: {
            module: BB.createShaderModule({
              code: "@compute @workgroup_size(1) fn main() {}"
            }),
            entryPoint: "main"
          }
        }),
        querySet: BB.createQuerySet({
          type: "timestamp",
          count: 2
        }),
        resolveBuf: BB.createBuffer({
          size: 16,
          usage: GPUBufferUsage.QUERY_RESOLVE | GPUBufferUsage.COPY_SRC
        }),
        pool: [],
        lastMs: 0,
        inFlight: 0
      } : null
    }

    function dB(BB, jB) {
      const zB = jB.beginComputePass({
        timestampWrites: {
          querySet: BB.querySet,
          beginningOfPassWriteIndex: 0
        }
      });
      zB.setPipeline(BB.markerPipeline), zB.dispatchWorkgroups(1), zB.end()
    }

    function IB(BB, jB) {
      const zB = jB.beginComputePass({
        timestampWrites: {
          querySet: BB.querySet,
          endOfPassWriteIndex: 1
        }
      });
      zB.setPipeline(BB.markerPipeline), zB.dispatchWorkgroups(1), zB.end()
    }

    function NB(BB) {
      if (BB.inFlight > 3) return;
      const jB = BB.device,
        zB = BB.pool.pop() ?? jB.createBuffer({
          size: 16,
          usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
        }),
        QB = jB.createCommandEncoder();
      QB.resolveQuerySet(BB.querySet, 0, 2, BB.resolveBuf, 0), QB.copyBufferToBuffer(BB.resolveBuf, 0, zB, 0, 16), jB.queue.submit([QB.finish()]), BB.inFlight++, zB.mapAsync(GPUMapMode.READ).then((() => {
        const jB = new BigInt64Array(zB.getMappedRange()),
          QB = Number(jB[1] - jB[0]) / 1e6;
        QB >= 0 && QB < 5e3 && (BB.lastMs = BB.lastMs > 0 ? .8 * BB.lastMs + .2 * QB : QB), zB.unmap(), BB.pool.push(zB), BB.inFlight--
      }), (() => {
        BB.inFlight--
      }))
    }

    function uB(BB) {
      BB.querySet.destroy(), BB.resolveBuf.destroy();
      for (const jB of BB.pool) jB.destroy();
      BB.pool.length = 0
    }
    zB.r(jB), zB.d(jB, {
      createGpuFrameTimer: () => nB,
      destroyGpuFrameTimer: () => uB,
      gpuFrameTimerBegin: () => dB,
      gpuFrameTimerEnd: () => IB,
      gpuFrameTimerResolve: () => NB,
      gpuTimingSupportedFor: () => QB
    })
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);