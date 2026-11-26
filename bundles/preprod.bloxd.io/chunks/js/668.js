export const id = 668;
export const ids = [668];
export const modules = {
  63973: (BB, OB, GB) => {
    function YB(BB) {
      return BB.features.has("timestamp-query")
    }

    function DB(BB) {
      return YB(BB) ? {
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

    function QB(BB, OB) {
      const GB = OB.beginComputePass({
        timestampWrites: {
          querySet: BB.querySet,
          beginningOfPassWriteIndex: 0
        }
      });
      GB.setPipeline(BB.markerPipeline), GB.dispatchWorkgroups(1), GB.end()
    }

    function oB(BB, OB) {
      const GB = OB.beginComputePass({
        timestampWrites: {
          querySet: BB.querySet,
          endOfPassWriteIndex: 1
        }
      });
      GB.setPipeline(BB.markerPipeline), GB.dispatchWorkgroups(1), GB.end()
    }

    function jB(BB) {
      if (BB.inFlight > 3) return;
      const OB = BB.device,
        GB = BB.pool.pop() ?? OB.createBuffer({
          size: 16,
          usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
        }),
        YB = OB.createCommandEncoder();
      YB.resolveQuerySet(BB.querySet, 0, 2, BB.resolveBuf, 0), YB.copyBufferToBuffer(BB.resolveBuf, 0, GB, 0, 16), OB.queue.submit([YB.finish()]), BB.inFlight++, GB.mapAsync(GPUMapMode.READ).then((() => {
        const OB = new BigInt64Array(GB.getMappedRange()),
          YB = Number(OB[1] - OB[0]) / 1e6;
        YB >= 0 && YB < 5e3 && (BB.lastMs = BB.lastMs > 0 ? .8 * BB.lastMs + .2 * YB : YB), GB.unmap(), BB.pool.push(GB), BB.inFlight--
      }), (() => {
        BB.inFlight--
      }))
    }

    function yB(BB) {
      BB.querySet.destroy(), BB.resolveBuf.destroy();
      for (const OB of BB.pool) OB.destroy();
      BB.pool.length = 0
    }
    GB.r(OB), GB.d(OB, {
      createGpuFrameTimer: () => DB,
      destroyGpuFrameTimer: () => yB,
      gpuFrameTimerBegin: () => QB,
      gpuFrameTimerEnd: () => oB,
      gpuFrameTimerResolve: () => jB,
      gpuTimingSupportedFor: () => YB
    })
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);