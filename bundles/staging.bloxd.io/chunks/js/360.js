export const id = 360;
export const ids = [360];
export const modules = {
  61431: (mm, Tm, fm) => {
    function hm(mm) {
      return mm.features.has("timestamp-query")
    }

    function Am(mm) {
      return hm(mm) ? {
        device: mm,
        markerPipeline: mm.createComputePipeline({
          layout: "auto",
          compute: {
            module: mm.createShaderModule({
              code: "@compute @workgroup_size(1) fn main() {}"
            }),
            entryPoint: "main"
          }
        }),
        querySet: mm.createQuerySet({
          type: "timestamp",
          count: 2
        }),
        resolveBuf: mm.createBuffer({
          size: 16,
          usage: GPUBufferUsage.QUERY_RESOLVE | GPUBufferUsage.COPY_SRC
        }),
        pool: [],
        lastMs: 0,
        inFlight: 0
      } : null
    }

    function am(mm, Tm) {
      const fm = Tm.beginComputePass({
        timestampWrites: {
          querySet: mm.querySet,
          beginningOfPassWriteIndex: 0
        }
      });
      fm.setPipeline(mm.markerPipeline), fm.dispatchWorkgroups(1), fm.end()
    }

    function xm(mm, Tm) {
      const fm = Tm.beginComputePass({
        timestampWrites: {
          querySet: mm.querySet,
          endOfPassWriteIndex: 1
        }
      });
      fm.setPipeline(mm.markerPipeline), fm.dispatchWorkgroups(1), fm.end()
    }

    function wm(mm) {
      if (mm.inFlight > 3) return;
      const Tm = mm.device,
        fm = mm.pool.pop() ?? Tm.createBuffer({
          size: 16,
          usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
        }),
        hm = Tm.createCommandEncoder();
      hm.resolveQuerySet(mm.querySet, 0, 2, mm.resolveBuf, 0), hm.copyBufferToBuffer(mm.resolveBuf, 0, fm, 0, 16), Tm.queue.submit([hm.finish()]), mm.inFlight++, fm.mapAsync(GPUMapMode.READ).then((() => {
        const Tm = new BigInt64Array(fm.getMappedRange()),
          hm = Number(Tm[1] - Tm[0]) / 1e6;
        hm >= 0 && hm < 5e3 && (mm.lastMs = mm.lastMs > 0 ? .8 * mm.lastMs + .2 * hm : hm), fm.unmap(), mm.pool.push(fm), mm.inFlight--
      }), (() => {
        mm.inFlight--
      }))
    }

    function Dm(mm) {
      mm.querySet.destroy(), mm.resolveBuf.destroy();
      for (const Tm of mm.pool) Tm.destroy();
      mm.pool.length = 0
    }
    fm.r(Tm), fm.d(Tm, {
      createGpuFrameTimer: () => Am,
      destroyGpuFrameTimer: () => Dm,
      gpuFrameTimerBegin: () => am,
      gpuFrameTimerEnd: () => xm,
      gpuFrameTimerResolve: () => wm,
      gpuTimingSupportedFor: () => hm
    })
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);