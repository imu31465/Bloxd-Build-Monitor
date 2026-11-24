export const id = 364;
export const ids = [364];
export const modules = {
  61235: (TT, UT, mT) => {
    function WT(TT) {
      return TT.features.has("timestamp-query")
    }

    function zT(TT) {
      return WT(TT) ? {
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

    function MT(TT, UT) {
      const mT = UT.beginComputePass({
        timestampWrites: {
          querySet: TT.querySet,
          beginningOfPassWriteIndex: 0
        }
      });
      mT.setPipeline(TT.markerPipeline), mT.dispatchWorkgroups(1), mT.end()
    }

    function gT(TT, UT) {
      const mT = UT.beginComputePass({
        timestampWrites: {
          querySet: TT.querySet,
          endOfPassWriteIndex: 1
        }
      });
      mT.setPipeline(TT.markerPipeline), mT.dispatchWorkgroups(1), mT.end()
    }

    function nT(TT) {
      if (TT.inFlight > 3) return;
      const UT = TT.device,
        mT = TT.pool.pop() ?? UT.createBuffer({
          size: 16,
          usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
        }),
        WT = UT.createCommandEncoder();
      WT.resolveQuerySet(TT.querySet, 0, 2, TT.resolveBuf, 0), WT.copyBufferToBuffer(TT.resolveBuf, 0, mT, 0, 16), UT.queue.submit([WT.finish()]), TT.inFlight++, mT.mapAsync(GPUMapMode.READ).then((() => {
        const UT = new BigInt64Array(mT.getMappedRange()),
          WT = Number(UT[1] - UT[0]) / 1e6;
        WT >= 0 && WT < 5e3 && (TT.lastMs = TT.lastMs > 0 ? .8 * TT.lastMs + .2 * WT : WT), mT.unmap(), TT.pool.push(mT), TT.inFlight--
      }), (() => {
        TT.inFlight--
      }))
    }

    function HT(TT) {
      TT.querySet.destroy(), TT.resolveBuf.destroy();
      for (const UT of TT.pool) UT.destroy();
      TT.pool.length = 0
    }
    mT.r(UT), mT.d(UT, {
      createGpuFrameTimer: () => zT,
      destroyGpuFrameTimer: () => HT,
      gpuFrameTimerBegin: () => MT,
      gpuFrameTimerEnd: () => gT,
      gpuFrameTimerResolve: () => nT,
      gpuTimingSupportedFor: () => WT
    })
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);