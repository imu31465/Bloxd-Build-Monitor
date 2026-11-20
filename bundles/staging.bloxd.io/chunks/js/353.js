export const id = 353;
export const ids = [353];
export const modules = {
  60678: (vv, zv, Pv) => {
    function hv(vv) {
      return vv.features.has("timestamp-query")
    }

    function Sv(vv) {
      return hv(vv) ? {
        device: vv,
        markerPipeline: vv.createComputePipeline({
          layout: "auto",
          compute: {
            module: vv.createShaderModule({
              code: "@compute @workgroup_size(1) fn main() {}"
            }),
            entryPoint: "main"
          }
        }),
        querySet: vv.createQuerySet({
          type: "timestamp",
          count: 2
        }),
        resolveBuf: vv.createBuffer({
          size: 16,
          usage: GPUBufferUsage.QUERY_RESOLVE | GPUBufferUsage.COPY_SRC
        }),
        pool: [],
        lastMs: 0,
        inFlight: 0
      } : null
    }

    function ev(vv, zv) {
      const Pv = zv.beginComputePass({
        timestampWrites: {
          querySet: vv.querySet,
          beginningOfPassWriteIndex: 0
        }
      });
      Pv.setPipeline(vv.markerPipeline), Pv.dispatchWorkgroups(1), Pv.end()
    }

    function gv(vv, zv) {
      const Pv = zv.beginComputePass({
        timestampWrites: {
          querySet: vv.querySet,
          endOfPassWriteIndex: 1
        }
      });
      Pv.setPipeline(vv.markerPipeline), Pv.dispatchWorkgroups(1), Pv.end()
    }

    function pv(vv) {
      if (vv.inFlight > 3) return;
      const zv = vv.device,
        Pv = vv.pool.pop() ?? zv.createBuffer({
          size: 16,
          usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
        }),
        hv = zv.createCommandEncoder();
      hv.resolveQuerySet(vv.querySet, 0, 2, vv.resolveBuf, 0), hv.copyBufferToBuffer(vv.resolveBuf, 0, Pv, 0, 16), zv.queue.submit([hv.finish()]), vv.inFlight++, Pv.mapAsync(GPUMapMode.READ).then((() => {
        const zv = new BigInt64Array(Pv.getMappedRange()),
          hv = Number(zv[1] - zv[0]) / 1e6;
        hv >= 0 && hv < 5e3 && (vv.lastMs = vv.lastMs > 0 ? .8 * vv.lastMs + .2 * hv : hv), Pv.unmap(), vv.pool.push(Pv), vv.inFlight--
      }), (() => {
        vv.inFlight--
      }))
    }

    function dv(vv) {
      vv.querySet.destroy(), vv.resolveBuf.destroy();
      for (const zv of vv.pool) zv.destroy();
      vv.pool.length = 0
    }
    Pv.r(zv), Pv.d(zv, {
      createGpuFrameTimer: () => Sv,
      destroyGpuFrameTimer: () => dv,
      gpuFrameTimerBegin: () => ev,
      gpuFrameTimerEnd: () => gv,
      gpuFrameTimerResolve: () => pv,
      gpuTimingSupportedFor: () => hv
    })
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);