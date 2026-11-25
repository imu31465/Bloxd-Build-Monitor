export const id = 364;
export const ids = [364];
export const modules = {
  61613: (tt, et, Vt) => {
    function Ot(tt) {
      return tt.features.has("timestamp-query")
    }

    function qt(tt) {
      return Ot(tt) ? {
        device: tt,
        markerPipeline: tt.createComputePipeline({
          layout: "auto",
          compute: {
            module: tt.createShaderModule({
              code: "@compute @workgroup_size(1) fn main() {}"
            }),
            entryPoint: "main"
          }
        }),
        querySet: tt.createQuerySet({
          type: "timestamp",
          count: 2
        }),
        resolveBuf: tt.createBuffer({
          size: 16,
          usage: GPUBufferUsage.QUERY_RESOLVE | GPUBufferUsage.COPY_SRC
        }),
        pool: [],
        lastMs: 0,
        inFlight: 0
      } : null
    }

    function Dt(tt, et) {
      const Vt = et.beginComputePass({
        timestampWrites: {
          querySet: tt.querySet,
          beginningOfPassWriteIndex: 0
        }
      });
      Vt.setPipeline(tt.markerPipeline), Vt.dispatchWorkgroups(1), Vt.end()
    }

    function mt(tt, et) {
      const Vt = et.beginComputePass({
        timestampWrites: {
          querySet: tt.querySet,
          endOfPassWriteIndex: 1
        }
      });
      Vt.setPipeline(tt.markerPipeline), Vt.dispatchWorkgroups(1), Vt.end()
    }

    function dt(tt) {
      if (tt.inFlight > 3) return;
      const et = tt.device,
        Vt = tt.pool.pop() ?? et.createBuffer({
          size: 16,
          usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
        }),
        Ot = et.createCommandEncoder();
      Ot.resolveQuerySet(tt.querySet, 0, 2, tt.resolveBuf, 0), Ot.copyBufferToBuffer(tt.resolveBuf, 0, Vt, 0, 16), et.queue.submit([Ot.finish()]), tt.inFlight++, Vt.mapAsync(GPUMapMode.READ).then((() => {
        const et = new BigInt64Array(Vt.getMappedRange()),
          Ot = Number(et[1] - et[0]) / 1e6;
        Ot >= 0 && Ot < 5e3 && (tt.lastMs = tt.lastMs > 0 ? .8 * tt.lastMs + .2 * Ot : Ot), Vt.unmap(), tt.pool.push(Vt), tt.inFlight--
      }), (() => {
        tt.inFlight--
      }))
    }

    function jt(tt) {
      tt.querySet.destroy(), tt.resolveBuf.destroy();
      for (const et of tt.pool) et.destroy();
      tt.pool.length = 0
    }
    Vt.r(et), Vt.d(et, {
      createGpuFrameTimer: () => qt,
      destroyGpuFrameTimer: () => jt,
      gpuFrameTimerBegin: () => Dt,
      gpuFrameTimerEnd: () => mt,
      gpuFrameTimerResolve: () => dt,
      gpuTimingSupportedFor: () => Ot
    })
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);