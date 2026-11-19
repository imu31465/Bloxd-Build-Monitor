export const id = 352;
export const ids = [352];
export const modules = {
  60105: (TT, oT, IT) => {
    function iT(TT) {
      return TT.features.has("timestamp-query")
    }

    function zT(TT) {
      return iT(TT) ? {
        device: TT,
        markerPipeline: TT.createComputePipeline({
          layout: "auto",
          compute: {
            module: TT.createShaderModule({
              code: "@compute @workgroup_size(1) fn main() {}"
            }),
            entryPoint: "main"
          }
        }),
        querySet: TT.createQuerySet({
          type: "timestamp",
          count: 2
        }),
        resolveBuf: TT.createBuffer({
          size: 16,
          usage: GPUBufferUsage.QUERY_RESOLVE | GPUBufferUsage.COPY_SRC
        }),
        pool: [],
        lastMs: 0,
        inFlight: 0
      } : null
    }

    function kT(TT, oT) {
      const IT = oT.beginComputePass({
        timestampWrites: {
          querySet: TT.querySet,
          beginningOfPassWriteIndex: 0
        }
      });
      IT.setPipeline(TT.markerPipeline), IT.dispatchWorkgroups(1), IT.end()
    }

    function WT(TT, oT) {
      const IT = oT.beginComputePass({
        timestampWrites: {
          querySet: TT.querySet,
          endOfPassWriteIndex: 1
        }
      });
      IT.setPipeline(TT.markerPipeline), IT.dispatchWorkgroups(1), IT.end()
    }

    function XT(TT) {
      if (TT.inFlight > 3) return;
      const oT = TT.device,
        IT = TT.pool.pop() ?? oT.createBuffer({
          size: 16,
          usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
        }),
        iT = oT.createCommandEncoder();
      iT.resolveQuerySet(TT.querySet, 0, 2, TT.resolveBuf, 0), iT.copyBufferToBuffer(TT.resolveBuf, 0, IT, 0, 16), oT.queue.submit([iT.finish()]), TT.inFlight++, IT.mapAsync(GPUMapMode.READ).then((() => {
        const oT = new BigInt64Array(IT.getMappedRange()),
          iT = Number(oT[1] - oT[0]) / 1e6;
        iT >= 0 && iT < 5e3 && (TT.lastMs = TT.lastMs > 0 ? .8 * TT.lastMs + .2 * iT : iT), IT.unmap(), TT.pool.push(IT), TT.inFlight--
      }), (() => {
        TT.inFlight--
      }))
    }

    function BT(TT) {
      TT.querySet.destroy(), TT.resolveBuf.destroy();
      for (const oT of TT.pool) oT.destroy();
      TT.pool.length = 0
    }
    IT.r(oT), IT.d(oT, {
      createGpuFrameTimer: () => zT,
      destroyGpuFrameTimer: () => BT,
      gpuFrameTimerBegin: () => kT,
      gpuFrameTimerEnd: () => WT,
      gpuFrameTimerResolve: () => XT,
      gpuTimingSupportedFor: () => iT
    })
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);