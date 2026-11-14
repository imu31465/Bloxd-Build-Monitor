export const id = 332;
export const ids = [332];
export const modules = {
  58683: (WW, RW, MW) => {
    function wW(WW) {
      return WW.features.has("timestamp-query")
    }

    function CW(WW) {
      return wW(WW) ? {
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

    function zR(WW, RW) {
      const MW = RW.beginComputePass({
        timestampWrites: {
          querySet: WW.querySet,
          beginningOfPassWriteIndex: 0
        }
      });
      MW.setPipeline(WW.markerPipeline), MW.dispatchWorkgroups(1), MW.end()
    }

    function AW(WW, RW) {
      const MW = RW.beginComputePass({
        timestampWrites: {
          querySet: WW.querySet,
          endOfPassWriteIndex: 1
        }
      });
      MW.setPipeline(WW.markerPipeline), MW.dispatchWorkgroups(1), MW.end()
    }

    function bR(WW) {
      if (WW.inFlight > 3) return;
      const RW = WW.device,
        MW = WW.pool.pop() ?? RW.createBuffer({
          size: 16,
          usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
        }),
        wW = RW.createCommandEncoder();
      wW.resolveQuerySet(WW.querySet, 0, 2, WW.resolveBuf, 0), wW.copyBufferToBuffer(WW.resolveBuf, 0, MW, 0, 16), RW.queue.submit([wW.finish()]), WW.inFlight++, MW.mapAsync(GPUMapMode.READ).then((() => {
        const RW = new BigInt64Array(MW.getMappedRange()),
          wW = Number(RW[1] - RW[0]) / 1e6;
        wW >= 0 && wW < 5e3 && (WW.lastMs = WW.lastMs > 0 ? .8 * WW.lastMs + .2 * wW : wW), MW.unmap(), WW.pool.push(MW), WW.inFlight--
      }), (() => {
        WW.inFlight--
      }))
    }

    function yR(WW) {
      WW.querySet.destroy(), WW.resolveBuf.destroy();
      for (const RW of WW.pool) RW.destroy();
      WW.pool.length = 0
    }
    MW.r(RW), MW.d(RW, {
      createGpuFrameTimer: () => CW,
      destroyGpuFrameTimer: () => yR,
      gpuFrameTimerBegin: () => zR,
      gpuFrameTimerEnd: () => AW,
      gpuFrameTimerResolve: () => bR,
      gpuTimingSupportedFor: () => wW
    })
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);