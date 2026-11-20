export const id = 353;
export const ids = [353];
export const modules = {
  61221: (qq, Eq, gq) => {
    function Yq(qq) {
      return qq.features.has("timestamp-query")
    }

    function lq(qq) {
      return Yq(qq) ? {
        device: qq,
        markerPipeline: qq.createComputePipeline({
          layout: "auto",
          compute: {
            module: qq.createShaderModule({
              code: "@compute @workgroup_size(1) fn main() {}"
            }),
            entryPoint: "main"
          }
        }),
        querySet: qq.createQuerySet({
          type: "timestamp",
          count: 2
        }),
        resolveBuf: qq.createBuffer({
          size: 16,
          usage: GPUBufferUsage.QUERY_RESOLVE | GPUBufferUsage.COPY_SRC
        }),
        pool: [],
        lastMs: 0,
        inFlight: 0
      } : null
    }

    function Oq(qq, Eq) {
      const gq = Eq.beginComputePass({
        timestampWrites: {
          querySet: qq.querySet,
          beginningOfPassWriteIndex: 0
        }
      });
      gq.setPipeline(qq.markerPipeline), gq.dispatchWorkgroups(1), gq.end()
    }

    function mq(qq, Eq) {
      const gq = Eq.beginComputePass({
        timestampWrites: {
          querySet: qq.querySet,
          endOfPassWriteIndex: 1
        }
      });
      gq.setPipeline(qq.markerPipeline), gq.dispatchWorkgroups(1), gq.end()
    }

    function xq(qq) {
      if (qq.inFlight > 3) return;
      const Eq = qq.device,
        gq = qq.pool.pop() ?? Eq.createBuffer({
          size: 16,
          usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
        }),
        Yq = Eq.createCommandEncoder();
      Yq.resolveQuerySet(qq.querySet, 0, 2, qq.resolveBuf, 0), Yq.copyBufferToBuffer(qq.resolveBuf, 0, gq, 0, 16), Eq.queue.submit([Yq.finish()]), qq.inFlight++, gq.mapAsync(GPUMapMode.READ).then((() => {
        const Eq = new BigInt64Array(gq.getMappedRange()),
          Yq = Number(Eq[1] - Eq[0]) / 1e6;
        Yq >= 0 && Yq < 5e3 && (qq.lastMs = qq.lastMs > 0 ? .8 * qq.lastMs + .2 * Yq : Yq), gq.unmap(), qq.pool.push(gq), qq.inFlight--
      }), (() => {
        qq.inFlight--
      }))
    }

    function Aq(qq) {
      qq.querySet.destroy(), qq.resolveBuf.destroy();
      for (const Eq of qq.pool) Eq.destroy();
      qq.pool.length = 0
    }
    gq.r(Eq), gq.d(Eq, {
      createGpuFrameTimer: () => lq,
      destroyGpuFrameTimer: () => Aq,
      gpuFrameTimerBegin: () => Oq,
      gpuFrameTimerEnd: () => mq,
      gpuFrameTimerResolve: () => xq,
      gpuTimingSupportedFor: () => Yq
    })
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);