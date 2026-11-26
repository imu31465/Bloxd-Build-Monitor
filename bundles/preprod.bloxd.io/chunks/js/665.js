export const id = 665;
export const ids = [665];
export const modules = {
  64028: (UU, XU, zU) => {
    function cU(UU) {
      return UU.features.has("timestamp-query")
    }

    function yU(UU) {
      return cU(UU) ? {
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

    function QU(UU, XU) {
      const zU = XU.beginComputePass({
        timestampWrites: {
          querySet: UU.querySet,
          beginningOfPassWriteIndex: 0
        }
      });
      zU.setPipeline(UU.markerPipeline), zU.dispatchWorkgroups(1), zU.end()
    }

    function AU(UU, XU) {
      const zU = XU.beginComputePass({
        timestampWrites: {
          querySet: UU.querySet,
          endOfPassWriteIndex: 1
        }
      });
      zU.setPipeline(UU.markerPipeline), zU.dispatchWorkgroups(1), zU.end()
    }

    function FU(UU) {
      if (UU.inFlight > 3) return;
      const XU = UU.device,
        zU = UU.pool.pop() ?? XU.createBuffer({
          size: 16,
          usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
        }),
        cU = XU.createCommandEncoder();
      cU.resolveQuerySet(UU.querySet, 0, 2, UU.resolveBuf, 0), cU.copyBufferToBuffer(UU.resolveBuf, 0, zU, 0, 16), XU.queue.submit([cU.finish()]), UU.inFlight++, zU.mapAsync(GPUMapMode.READ).then((() => {
        const XU = new BigInt64Array(zU.getMappedRange()),
          cU = Number(XU[1] - XU[0]) / 1e6;
        cU >= 0 && cU < 5e3 && (UU.lastMs = UU.lastMs > 0 ? .8 * UU.lastMs + .2 * cU : cU), zU.unmap(), UU.pool.push(zU), UU.inFlight--
      }), (() => {
        UU.inFlight--
      }))
    }

    function oU(UU) {
      UU.querySet.destroy(), UU.resolveBuf.destroy();
      for (const XU of UU.pool) XU.destroy();
      UU.pool.length = 0
    }
    zU.r(XU), zU.d(XU, {
      createGpuFrameTimer: () => yU,
      destroyGpuFrameTimer: () => oU,
      gpuFrameTimerBegin: () => QU,
      gpuFrameTimerEnd: () => AU,
      gpuFrameTimerResolve: () => FU,
      gpuTimingSupportedFor: () => cU
    })
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);