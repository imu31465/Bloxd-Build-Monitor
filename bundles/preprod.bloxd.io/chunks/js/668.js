export const id = 668;
export const ids = [668];
export const modules = {
  64197: (HH, BH, LH) => {
    function AH(HH) {
      return HH.features.has("timestamp-query")
    }

    function rH(HH) {
      return AH(HH) ? {
        device: HH,
        markerPipeline: HH.createComputePipeline({
          layout: "auto",
          compute: {
            module: HH.createShaderModule({
              code: "@compute @workgroup_size(1) fn main() {}"
            }),
            entryPoint: "main"
          }
        }),
        querySet: HH.createQuerySet({
          type: "timestamp",
          count: 2
        }),
        resolveBuf: HH.createBuffer({
          size: 16,
          usage: GPUBufferUsage.QUERY_RESOLVE | GPUBufferUsage.COPY_SRC
        }),
        pool: [],
        lastMs: 0,
        inFlight: 0
      } : null
    }

    function SH(HH, BH) {
      const LH = BH.beginComputePass({
        timestampWrites: {
          querySet: HH.querySet,
          beginningOfPassWriteIndex: 0
        }
      });
      LH.setPipeline(HH.markerPipeline), LH.dispatchWorkgroups(1), LH.end()
    }

    function hH(HH, BH) {
      const LH = BH.beginComputePass({
        timestampWrites: {
          querySet: HH.querySet,
          endOfPassWriteIndex: 1
        }
      });
      LH.setPipeline(HH.markerPipeline), LH.dispatchWorkgroups(1), LH.end()
    }

    function tH(HH) {
      if (HH.inFlight > 3) return;
      const BH = HH.device,
        LH = HH.pool.pop() ?? BH.createBuffer({
          size: 16,
          usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
        }),
        AH = BH.createCommandEncoder();
      AH.resolveQuerySet(HH.querySet, 0, 2, HH.resolveBuf, 0), AH.copyBufferToBuffer(HH.resolveBuf, 0, LH, 0, 16), BH.queue.submit([AH.finish()]), HH.inFlight++, LH.mapAsync(GPUMapMode.READ).then((() => {
        const BH = new BigInt64Array(LH.getMappedRange()),
          AH = Number(BH[1] - BH[0]) / 1e6;
        AH >= 0 && AH < 5e3 && (HH.lastMs = HH.lastMs > 0 ? .8 * HH.lastMs + .2 * AH : AH), LH.unmap(), HH.pool.push(LH), HH.inFlight--
      }), (() => {
        HH.inFlight--
      }))
    }

    function zH(HH) {
      HH.querySet.destroy(), HH.resolveBuf.destroy();
      for (const BH of HH.pool) BH.destroy();
      HH.pool.length = 0
    }
    LH.r(BH), LH.d(BH, {
      createGpuFrameTimer: () => rH,
      destroyGpuFrameTimer: () => zH,
      gpuFrameTimerBegin: () => SH,
      gpuFrameTimerEnd: () => hH,
      gpuFrameTimerResolve: () => tH,
      gpuTimingSupportedFor: () => AH
    })
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);