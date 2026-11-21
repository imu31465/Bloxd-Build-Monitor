export const id = 353;
export const ids = [353];
export const modules = {
  60968: (dd, Jd, kd) => {
    function pd(dd) {
      return dd.features.has("timestamp-query")
    }

    function Nd(dd) {
      return pd(dd) ? {
        device: dd,
        markerPipeline: dd.createComputePipeline({
          layout: "auto",
          compute: {
            module: dd.createShaderModule({
              code: "@compute @workgroup_size(1) fn main() {}"
            }),
            entryPoint: "main"
          }
        }),
        querySet: dd.createQuerySet({
          type: "timestamp",
          count: 2
        }),
        resolveBuf: dd.createBuffer({
          size: 16,
          usage: GPUBufferUsage.QUERY_RESOLVE | GPUBufferUsage.COPY_SRC
        }),
        pool: [],
        lastMs: 0,
        inFlight: 0
      } : null
    }

    function Wd(dd, Jd) {
      const kd = Jd.beginComputePass({
        timestampWrites: {
          querySet: dd.querySet,
          beginningOfPassWriteIndex: 0
        }
      });
      kd.setPipeline(dd.markerPipeline), kd.dispatchWorkgroups(1), kd.end()
    }

    function Pd(dd, Jd) {
      const kd = Jd.beginComputePass({
        timestampWrites: {
          querySet: dd.querySet,
          endOfPassWriteIndex: 1
        }
      });
      kd.setPipeline(dd.markerPipeline), kd.dispatchWorkgroups(1), kd.end()
    }

    function Zd(dd) {
      if (dd.inFlight > 3) return;
      const Jd = dd.device,
        kd = dd.pool.pop() ?? Jd.createBuffer({
          size: 16,
          usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
        }),
        pd = Jd.createCommandEncoder();
      pd.resolveQuerySet(dd.querySet, 0, 2, dd.resolveBuf, 0), pd.copyBufferToBuffer(dd.resolveBuf, 0, kd, 0, 16), Jd.queue.submit([pd.finish()]), dd.inFlight++, kd.mapAsync(GPUMapMode.READ).then((() => {
        const Jd = new BigInt64Array(kd.getMappedRange()),
          pd = Number(Jd[1] - Jd[0]) / 1e6;
        pd >= 0 && pd < 5e3 && (dd.lastMs = dd.lastMs > 0 ? .8 * dd.lastMs + .2 * pd : pd), kd.unmap(), dd.pool.push(kd), dd.inFlight--
      }), (() => {
        dd.inFlight--
      }))
    }

    function gd(dd) {
      dd.querySet.destroy(), dd.resolveBuf.destroy();
      for (const Jd of dd.pool) Jd.destroy();
      dd.pool.length = 0
    }
    kd.r(Jd), kd.d(Jd, {
      createGpuFrameTimer: () => Nd,
      destroyGpuFrameTimer: () => gd,
      gpuFrameTimerBegin: () => Wd,
      gpuFrameTimerEnd: () => Pd,
      gpuFrameTimerResolve: () => Zd,
      gpuTimingSupportedFor: () => pd
    })
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);