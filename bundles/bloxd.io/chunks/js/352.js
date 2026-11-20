export const id = 352;
export const ids = [352];
export const modules = {
  60346: (bb, ab, Ub) => {
    function Ab(bb) {
      return bb.features.has("timestamp-query")
    }

    function Mb(bb) {
      return Ab(bb) ? {
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

    function Tb(bb, ab) {
      const Ub = ab.beginComputePass({
        timestampWrites: {
          querySet: bb.querySet,
          beginningOfPassWriteIndex: 0
        }
      });
      Ub.setPipeline(bb.markerPipeline), Ub.dispatchWorkgroups(1), Ub.end()
    }

    function Eb(bb, ab) {
      const Ub = ab.beginComputePass({
        timestampWrites: {
          querySet: bb.querySet,
          endOfPassWriteIndex: 1
        }
      });
      Ub.setPipeline(bb.markerPipeline), Ub.dispatchWorkgroups(1), Ub.end()
    }

    function Yb(bb) {
      if (bb.inFlight > 3) return;
      const ab = bb.device,
        Ub = bb.pool.pop() ?? ab.createBuffer({
          size: 16,
          usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
        }),
        Ab = ab.createCommandEncoder();
      Ab.resolveQuerySet(bb.querySet, 0, 2, bb.resolveBuf, 0), Ab.copyBufferToBuffer(bb.resolveBuf, 0, Ub, 0, 16), ab.queue.submit([Ab.finish()]), bb.inFlight++, Ub.mapAsync(GPUMapMode.READ).then((() => {
        const ab = new BigInt64Array(Ub.getMappedRange()),
          Ab = Number(ab[1] - ab[0]) / 1e6;
        Ab >= 0 && Ab < 5e3 && (bb.lastMs = bb.lastMs > 0 ? .8 * bb.lastMs + .2 * Ab : Ab), Ub.unmap(), bb.pool.push(Ub), bb.inFlight--
      }), (() => {
        bb.inFlight--
      }))
    }

    function Bb(bb) {
      bb.querySet.destroy(), bb.resolveBuf.destroy();
      for (const ab of bb.pool) ab.destroy();
      bb.pool.length = 0
    }
    Ub.r(ab), Ub.d(ab, {
      createGpuFrameTimer: () => Mb,
      destroyGpuFrameTimer: () => Bb,
      gpuFrameTimerBegin: () => Tb,
      gpuFrameTimerEnd: () => Eb,
      gpuFrameTimerResolve: () => Yb,
      gpuTimingSupportedFor: () => Ab
    })
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);