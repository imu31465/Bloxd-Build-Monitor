export const id = 340;
export const ids = [340];
export const modules = {
  59792: (yb, bb, Wy) => {
    function Uy(yb) {
      return yb.features.has("timestamp-query")
    }

    function hy(yb) {
      return Uy(yb) ? {
        device: yb,
        markerPipeline: yb.createComputePipeline({
          layout: "auto",
          compute: {
            module: yb.createShaderModule({
              code: "@compute @workgroup_size(1) fn main() {}"
            }),
            entryPoint: "main"
          }
        }),
        querySet: yb.createQuerySet({
          type: "timestamp",
          count: 2
        }),
        resolveBuf: yb.createBuffer({
          size: 16,
          usage: GPUBufferUsage.QUERY_RESOLVE | GPUBufferUsage.COPY_SRC
        }),
        pool: [],
        lastMs: 0,
        inFlight: 0
      } : null
    }

    function fy(yb, bb) {
      const Wy = bb.beginComputePass({
        timestampWrites: {
          querySet: yb.querySet,
          beginningOfPassWriteIndex: 0
        }
      });
      Wy.setPipeline(yb.markerPipeline), Wy.dispatchWorkgroups(1), Wy.end()
    }

    function Zy(yb, bb) {
      const Wy = bb.beginComputePass({
        timestampWrites: {
          querySet: yb.querySet,
          endOfPassWriteIndex: 1
        }
      });
      Wy.setPipeline(yb.markerPipeline), Wy.dispatchWorkgroups(1), Wy.end()
    }

    function cb(yb) {
      if (yb.inFlight > 3) return;
      const bb = yb.device,
        Wy = yb.pool.pop() ?? bb.createBuffer({
          size: 16,
          usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
        }),
        Uy = bb.createCommandEncoder();
      Uy.resolveQuerySet(yb.querySet, 0, 2, yb.resolveBuf, 0), Uy.copyBufferToBuffer(yb.resolveBuf, 0, Wy, 0, 16), bb.queue.submit([Uy.finish()]), yb.inFlight++, Wy.mapAsync(GPUMapMode.READ).then((() => {
        const bb = new BigInt64Array(Wy.getMappedRange()),
          Uy = Number(bb[1] - bb[0]) / 1e6;
        Uy >= 0 && Uy < 5e3 && (yb.lastMs = yb.lastMs > 0 ? .8 * yb.lastMs + .2 * Uy : Uy), Wy.unmap(), yb.pool.push(Wy), yb.inFlight--
      }), (() => {
        yb.inFlight--
      }))
    }

    function Py(yb) {
      yb.querySet.destroy(), yb.resolveBuf.destroy();
      for (const bb of yb.pool) bb.destroy();
      yb.pool.length = 0
    }
    Wy.r(bb), Wy.d(bb, {
      createGpuFrameTimer: () => hy,
      destroyGpuFrameTimer: () => Py,
      gpuFrameTimerBegin: () => fy,
      gpuFrameTimerEnd: () => Zy,
      gpuFrameTimerResolve: () => cb,
      gpuTimingSupportedFor: () => Uy
    })
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);