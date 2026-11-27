export const id = 677;
export const ids = [677];
export const modules = {
  64486: (WW, iW, OW) => {
    function mW(WW) {
      return WW.features.has("timestamp-query")
    }

    function EW(WW) {
      return mW(WW) ? {
        device: WW,
        markerPipeline: WW.createComputePipeline({
          layout: "auto",
          compute: {
            module: WW.createShaderModule({
              code: "@compute @workgroup_size(1) fn main() {}"
            }),
            entryPoint: "main"
          }
        }),
        querySet: WW.createQuerySet({
          type: "timestamp",
          count: 2
        }),
        resolveBuf: WW.createBuffer({
          size: 16,
          usage: GPUBufferUsage.QUERY_RESOLVE | GPUBufferUsage.COPY_SRC
        }),
        pool: [],
        lastMs: 0,
        inFlight: 0
      } : null
    }

    function NW(WW, iW) {
      const OW = iW.beginComputePass({
        timestampWrites: {
          querySet: WW.querySet,
          beginningOfPassWriteIndex: 0
        }
      });
      OW.setPipeline(WW.markerPipeline), OW.dispatchWorkgroups(1), OW.end()
    }

    function PW(WW, iW) {
      const OW = iW.beginComputePass({
        timestampWrites: {
          querySet: WW.querySet,
          endOfPassWriteIndex: 1
        }
      });
      OW.setPipeline(WW.markerPipeline), OW.dispatchWorkgroups(1), OW.end()
    }

    function LW(WW) {
      if (WW.inFlight > 3) return;
      const iW = WW.device,
        OW = WW.pool.pop() ?? iW.createBuffer({
          size: 16,
          usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
        }),
        mW = iW.createCommandEncoder();
      mW.resolveQuerySet(WW.querySet, 0, 2, WW.resolveBuf, 0), mW.copyBufferToBuffer(WW.resolveBuf, 0, OW, 0, 16), iW.queue.submit([mW.finish()]), WW.inFlight++, OW.mapAsync(GPUMapMode.READ).then((() => {
        const iW = new BigInt64Array(OW.getMappedRange()),
          mW = Number(iW[1] - iW[0]) / 1e6;
        mW >= 0 && mW < 5e3 && (WW.lastMs = WW.lastMs > 0 ? .8 * WW.lastMs + .2 * mW : mW), OW.unmap(), WW.pool.push(OW), WW.inFlight--
      }), (() => {
        WW.inFlight--
      }))
    }

    function cW(WW) {
      WW.querySet.destroy(), WW.resolveBuf.destroy();
      for (const iW of WW.pool) iW.destroy();
      WW.pool.length = 0
    }
    OW.r(iW), OW.d(iW, {
      createGpuFrameTimer: () => EW,
      destroyGpuFrameTimer: () => cW,
      gpuFrameTimerBegin: () => NW,
      gpuFrameTimerEnd: () => PW,
      gpuFrameTimerResolve: () => LW,
      gpuTimingSupportedFor: () => mW
    })
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);