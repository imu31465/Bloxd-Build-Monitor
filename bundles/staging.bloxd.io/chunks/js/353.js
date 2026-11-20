export const id = 353;
export const ids = [353];
export const modules = {
  60651: (TT, kT, cT) => {
    function lT(TT) {
      return TT.features.has("timestamp-query")
    }

    function MT(TT) {
      return lT(TT) ? {
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

    function KT(TT, kT) {
      const cT = kT.beginComputePass({
        timestampWrites: {
          querySet: TT.querySet,
          beginningOfPassWriteIndex: 0
        }
      });
      cT.setPipeline(TT.markerPipeline), cT.dispatchWorkgroups(1), cT.end()
    }

    function OT(TT, kT) {
      const cT = kT.beginComputePass({
        timestampWrites: {
          querySet: TT.querySet,
          endOfPassWriteIndex: 1
        }
      });
      cT.setPipeline(TT.markerPipeline), cT.dispatchWorkgroups(1), cT.end()
    }

    function yT(TT) {
      if (TT.inFlight > 3) return;
      const kT = TT.device,
        cT = TT.pool.pop() ?? kT.createBuffer({
          size: 16,
          usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
        }),
        lT = kT.createCommandEncoder();
      lT.resolveQuerySet(TT.querySet, 0, 2, TT.resolveBuf, 0), lT.copyBufferToBuffer(TT.resolveBuf, 0, cT, 0, 16), kT.queue.submit([lT.finish()]), TT.inFlight++, cT.mapAsync(GPUMapMode.READ).then((() => {
        const kT = new BigInt64Array(cT.getMappedRange()),
          lT = Number(kT[1] - kT[0]) / 1e6;
        lT >= 0 && lT < 5e3 && (TT.lastMs = TT.lastMs > 0 ? .8 * TT.lastMs + .2 * lT : lT), cT.unmap(), TT.pool.push(cT), TT.inFlight--
      }), (() => {
        TT.inFlight--
      }))
    }

    function fT(TT) {
      TT.querySet.destroy(), TT.resolveBuf.destroy();
      for (const kT of TT.pool) kT.destroy();
      TT.pool.length = 0
    }
    cT.r(kT), cT.d(kT, {
      createGpuFrameTimer: () => MT,
      destroyGpuFrameTimer: () => fT,
      gpuFrameTimerBegin: () => KT,
      gpuFrameTimerEnd: () => OT,
      gpuFrameTimerResolve: () => yT,
      gpuTimingSupportedFor: () => lT
    })
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);