export const id = 353;
export const ids = [353];
export const modules = {
  60692: (bb, ub, hb) => {
    function Bb(bb) {
      return bb.features.has("timestamp-query")
    }

    function Ob(bb) {
      return Bb(bb) ? {
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

    function Gb(bb, ub) {
      const hb = ub.beginComputePass({
        timestampWrites: {
          querySet: bb.querySet,
          beginningOfPassWriteIndex: 0
        }
      });
      hb.setPipeline(bb.markerPipeline), hb.dispatchWorkgroups(1), hb.end()
    }

    function Ub(bb, ub) {
      const hb = ub.beginComputePass({
        timestampWrites: {
          querySet: bb.querySet,
          endOfPassWriteIndex: 1
        }
      });
      hb.setPipeline(bb.markerPipeline), hb.dispatchWorkgroups(1), hb.end()
    }

    function Lb(bb) {
      if (bb.inFlight > 3) return;
      const ub = bb.device,
        hb = bb.pool.pop() ?? ub.createBuffer({
          size: 16,
          usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
        }),
        Bb = ub.createCommandEncoder();
      Bb.resolveQuerySet(bb.querySet, 0, 2, bb.resolveBuf, 0), Bb.copyBufferToBuffer(bb.resolveBuf, 0, hb, 0, 16), ub.queue.submit([Bb.finish()]), bb.inFlight++, hb.mapAsync(GPUMapMode.READ).then((() => {
        const ub = new BigInt64Array(hb.getMappedRange()),
          Bb = Number(ub[1] - ub[0]) / 1e6;
        Bb >= 0 && Bb < 5e3 && (bb.lastMs = bb.lastMs > 0 ? .8 * bb.lastMs + .2 * Bb : Bb), hb.unmap(), bb.pool.push(hb), bb.inFlight--
      }), (() => {
        bb.inFlight--
      }))
    }

    function Yb(bb) {
      bb.querySet.destroy(), bb.resolveBuf.destroy();
      for (const ub of bb.pool) ub.destroy();
      bb.pool.length = 0
    }
    hb.r(ub), hb.d(ub, {
      createGpuFrameTimer: () => Ob,
      destroyGpuFrameTimer: () => Yb,
      gpuFrameTimerBegin: () => Gb,
      gpuFrameTimerEnd: () => Ub,
      gpuFrameTimerResolve: () => Lb,
      gpuTimingSupportedFor: () => Bb
    })
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);