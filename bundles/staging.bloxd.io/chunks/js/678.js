export const id = 678;
export const ids = [678];
export const modules = {
  64503: (bb, wb, Mb) => {
    function eb(bb) {
      return bb.features.has("timestamp-query")
    }

    function Hb(bb) {
      return eb(bb) ? {
        device: bb,
        markerPipeline: bb.createComputePipeline({
          layout: "auto",
          compute: {
            module: bb.createShaderModule({
              code: "@compute @workgroup_size(1) fn main() {}"
            }),
            entryPoint: "main"
          }
        }),
        querySet: bb.createQuerySet({
          type: "timestamp",
          count: 2
        }),
        resolveBuf: bb.createBuffer({
          size: 16,
          usage: GPUBufferUsage.QUERY_RESOLVE | GPUBufferUsage.COPY_SRC
        }),
        pool: [],
        lastMs: 0,
        inFlight: 0
      } : null
    }

    function pb(bb, wb) {
      const Mb = wb.beginComputePass({
        timestampWrites: {
          querySet: bb.querySet,
          beginningOfPassWriteIndex: 0
        }
      });
      Mb.setPipeline(bb.markerPipeline), Mb.dispatchWorkgroups(1), Mb.end()
    }

    function Vb(bb, wb) {
      const Mb = wb.beginComputePass({
        timestampWrites: {
          querySet: bb.querySet,
          endOfPassWriteIndex: 1
        }
      });
      Mb.setPipeline(bb.markerPipeline), Mb.dispatchWorkgroups(1), Mb.end()
    }

    function gb(bb) {
      if (bb.inFlight > 3) return;
      const wb = bb.device,
        Mb = bb.pool.pop() ?? wb.createBuffer({
          size: 16,
          usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
        }),
        eb = wb.createCommandEncoder();
      eb.resolveQuerySet(bb.querySet, 0, 2, bb.resolveBuf, 0), eb.copyBufferToBuffer(bb.resolveBuf, 0, Mb, 0, 16), wb.queue.submit([eb.finish()]), bb.inFlight++, Mb.mapAsync(GPUMapMode.READ).then((() => {
        const wb = new BigInt64Array(Mb.getMappedRange()),
          eb = Number(wb[1] - wb[0]) / 1e6;
        eb >= 0 && eb < 5e3 && (bb.lastMs = bb.lastMs > 0 ? .8 * bb.lastMs + .2 * eb : eb), Mb.unmap(), bb.pool.push(Mb), bb.inFlight--
      }), (() => {
        bb.inFlight--
      }))
    }

    function lb(bb) {
      bb.querySet.destroy(), bb.resolveBuf.destroy();
      for (const wb of bb.pool) wb.destroy();
      bb.pool.length = 0
    }
    Mb.r(wb), Mb.d(wb, {
      createGpuFrameTimer: () => Hb,
      destroyGpuFrameTimer: () => lb,
      gpuFrameTimerBegin: () => pb,
      gpuFrameTimerEnd: () => Vb,
      gpuFrameTimerResolve: () => gb,
      gpuTimingSupportedFor: () => eb
    })
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);