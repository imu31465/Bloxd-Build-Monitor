export const id = 352;
export const ids = [352];
export const modules = {
  60632: (UU, RU, gU) => {
    function tU(UU) {
      return UU.features.has("timestamp-query")
    }

    function pU(UU) {
      return tU(UU) ? {
        device: UU,
        markerPipeline: UU.createComputePipeline({
          layout: "auto",
          compute: {
            module: UU.createShaderModule({
              code: "@compute @workgroup_size(1) fn main() {}"
            }),
            entryPoint: "main"
          }
        }),
        querySet: UU.createQuerySet({
          type: "timestamp",
          count: 2
        }),
        resolveBuf: UU.createBuffer({
          size: 16,
          usage: GPUBufferUsage.QUERY_RESOLVE | GPUBufferUsage.COPY_SRC
        }),
        pool: [],
        lastMs: 0,
        inFlight: 0
      } : null
    }

    function EU(UU, RU) {
      const gU = RU.beginComputePass({
        timestampWrites: {
          querySet: UU.querySet,
          beginningOfPassWriteIndex: 0
        }
      });
      gU.setPipeline(UU.markerPipeline), gU.dispatchWorkgroups(1), gU.end()
    }

    function PU(UU, RU) {
      const gU = RU.beginComputePass({
        timestampWrites: {
          querySet: UU.querySet,
          endOfPassWriteIndex: 1
        }
      });
      gU.setPipeline(UU.markerPipeline), gU.dispatchWorkgroups(1), gU.end()
    }

    function TU(UU) {
      if (UU.inFlight > 3) return;
      const RU = UU.device,
        gU = UU.pool.pop() ?? RU.createBuffer({
          size: 16,
          usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
        }),
        tU = RU.createCommandEncoder();
      tU.resolveQuerySet(UU.querySet, 0, 2, UU.resolveBuf, 0), tU.copyBufferToBuffer(UU.resolveBuf, 0, gU, 0, 16), RU.queue.submit([tU.finish()]), UU.inFlight++, gU.mapAsync(GPUMapMode.READ).then((() => {
        const RU = new BigInt64Array(gU.getMappedRange()),
          tU = Number(RU[1] - RU[0]) / 1e6;
        tU >= 0 && tU < 5e3 && (UU.lastMs = UU.lastMs > 0 ? .8 * UU.lastMs + .2 * tU : tU), gU.unmap(), UU.pool.push(gU), UU.inFlight--
      }), (() => {
        UU.inFlight--
      }))
    }

    function qU(UU) {
      UU.querySet.destroy(), UU.resolveBuf.destroy();
      for (const RU of UU.pool) RU.destroy();
      UU.pool.length = 0
    }
    gU.r(RU), gU.d(RU, {
      createGpuFrameTimer: () => pU,
      destroyGpuFrameTimer: () => qU,
      gpuFrameTimerBegin: () => EU,
      gpuFrameTimerEnd: () => PU,
      gpuFrameTimerResolve: () => TU,
      gpuTimingSupportedFor: () => tU
    })
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);