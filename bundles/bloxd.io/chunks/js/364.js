export const id = 364;
export const ids = [364];
export const modules = {
  61403: (BB, IB, ZB) => {
    function TB(BB) {
      return BB.features.has("timestamp-query")
    }

    function JB(BB) {
      return TB(BB) ? {
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

    function oB(BB, IB) {
      const ZB = IB.beginComputePass({
        timestampWrites: {
          querySet: BB.querySet,
          beginningOfPassWriteIndex: 0
        }
      });
      ZB.setPipeline(BB.markerPipeline), ZB.dispatchWorkgroups(1), ZB.end()
    }

    function GB(BB, IB) {
      const ZB = IB.beginComputePass({
        timestampWrites: {
          querySet: BB.querySet,
          endOfPassWriteIndex: 1
        }
      });
      ZB.setPipeline(BB.markerPipeline), ZB.dispatchWorkgroups(1), ZB.end()
    }

    function vB(BB) {
      if (BB.inFlight > 3) return;
      const IB = BB.device,
        ZB = BB.pool.pop() ?? IB.createBuffer({
          size: 16,
          usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
        }),
        TB = IB.createCommandEncoder();
      TB.resolveQuerySet(BB.querySet, 0, 2, BB.resolveBuf, 0), TB.copyBufferToBuffer(BB.resolveBuf, 0, ZB, 0, 16), IB.queue.submit([TB.finish()]), BB.inFlight++, ZB.mapAsync(GPUMapMode.READ).then((() => {
        const IB = new BigInt64Array(ZB.getMappedRange()),
          TB = Number(IB[1] - IB[0]) / 1e6;
        TB >= 0 && TB < 5e3 && (BB.lastMs = BB.lastMs > 0 ? .8 * BB.lastMs + .2 * TB : TB), ZB.unmap(), BB.pool.push(ZB), BB.inFlight--
      }), (() => {
        BB.inFlight--
      }))
    }

    function kB(BB) {
      BB.querySet.destroy(), BB.resolveBuf.destroy();
      for (const IB of BB.pool) IB.destroy();
      BB.pool.length = 0
    }
    ZB.r(IB), ZB.d(IB, {
      createGpuFrameTimer: () => JB,
      destroyGpuFrameTimer: () => kB,
      gpuFrameTimerBegin: () => oB,
      gpuFrameTimerEnd: () => GB,
      gpuFrameTimerResolve: () => vB,
      gpuTimingSupportedFor: () => TB
    })
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);