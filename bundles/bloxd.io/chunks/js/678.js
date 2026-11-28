export const id = 678;
export const ids = [678];
export const modules = {
  64865: (dd, Od, md) => {
    function Wd(dd) {
      return dd.features.has("timestamp-query")
    }

    function Fd(dd) {
      return Wd(dd) ? {
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

    function Rd(dd, Od) {
      const md = Od.beginComputePass({
        timestampWrites: {
          querySet: dd.querySet,
          beginningOfPassWriteIndex: 0
        }
      });
      md.setPipeline(dd.markerPipeline), md.dispatchWorkgroups(1), md.end()
    }

    function Xd(dd, Od) {
      const md = Od.beginComputePass({
        timestampWrites: {
          querySet: dd.querySet,
          endOfPassWriteIndex: 1
        }
      });
      md.setPipeline(dd.markerPipeline), md.dispatchWorkgroups(1), md.end()
    }

    function Kd(dd) {
      if (dd.inFlight > 3) return;
      const Od = dd.device,
        md = dd.pool.pop() ?? Od.createBuffer({
          size: 16,
          usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
        }),
        Wd = Od.createCommandEncoder();
      Wd.resolveQuerySet(dd.querySet, 0, 2, dd.resolveBuf, 0), Wd.copyBufferToBuffer(dd.resolveBuf, 0, md, 0, 16), Od.queue.submit([Wd.finish()]), dd.inFlight++, md.mapAsync(GPUMapMode.READ).then((() => {
        const Od = new BigInt64Array(md.getMappedRange()),
          Wd = Number(Od[1] - Od[0]) / 1e6;
        Wd >= 0 && Wd < 5e3 && (dd.lastMs = dd.lastMs > 0 ? .8 * dd.lastMs + .2 * Wd : Wd), md.unmap(), dd.pool.push(md), dd.inFlight--
      }), (() => {
        dd.inFlight--
      }))
    }

    function hd(dd) {
      dd.querySet.destroy(), dd.resolveBuf.destroy();
      for (const Od of dd.pool) Od.destroy();
      dd.pool.length = 0
    }
    md.r(Od), md.d(Od, {
      createGpuFrameTimer: () => Fd,
      destroyGpuFrameTimer: () => hd,
      gpuFrameTimerBegin: () => Rd,
      gpuFrameTimerEnd: () => Xd,
      gpuFrameTimerResolve: () => Kd,
      gpuTimingSupportedFor: () => Wd
    })
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);