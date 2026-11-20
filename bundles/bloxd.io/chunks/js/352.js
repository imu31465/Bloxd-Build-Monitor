export const id = 352;
export const ids = [352];
export const modules = {
  60675: (bb, cb, sb) => {
    function kb(bb) {
      return bb.features.has("timestamp-query")
    }

    function Wb(bb) {
      return kb(bb) ? {
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

    function ab(bb, cb) {
      const sb = cb.beginComputePass({
        timestampWrites: {
          querySet: bb.querySet,
          beginningOfPassWriteIndex: 0
        }
      });
      sb.setPipeline(bb.markerPipeline), sb.dispatchWorkgroups(1), sb.end()
    }

    function Tb(bb, cb) {
      const sb = cb.beginComputePass({
        timestampWrites: {
          querySet: bb.querySet,
          endOfPassWriteIndex: 1
        }
      });
      sb.setPipeline(bb.markerPipeline), sb.dispatchWorkgroups(1), sb.end()
    }

    function Ub(bb) {
      if (bb.inFlight > 3) return;
      const cb = bb.device,
        sb = bb.pool.pop() ?? cb.createBuffer({
          size: 16,
          usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
        }),
        kb = cb.createCommandEncoder();
      kb.resolveQuerySet(bb.querySet, 0, 2, bb.resolveBuf, 0), kb.copyBufferToBuffer(bb.resolveBuf, 0, sb, 0, 16), cb.queue.submit([kb.finish()]), bb.inFlight++, sb.mapAsync(GPUMapMode.READ).then((() => {
        const cb = new BigInt64Array(sb.getMappedRange()),
          kb = Number(cb[1] - cb[0]) / 1e6;
        kb >= 0 && kb < 5e3 && (bb.lastMs = bb.lastMs > 0 ? .8 * bb.lastMs + .2 * kb : kb), sb.unmap(), bb.pool.push(sb), bb.inFlight--
      }), (() => {
        bb.inFlight--
      }))
    }

    function Ib(bb) {
      bb.querySet.destroy(), bb.resolveBuf.destroy();
      for (const cb of bb.pool) cb.destroy();
      bb.pool.length = 0
    }
    sb.r(cb), sb.d(cb, {
      createGpuFrameTimer: () => Wb,
      destroyGpuFrameTimer: () => Ib,
      gpuFrameTimerBegin: () => ab,
      gpuFrameTimerEnd: () => Tb,
      gpuFrameTimerResolve: () => Ub,
      gpuTimingSupportedFor: () => kb
    })
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);