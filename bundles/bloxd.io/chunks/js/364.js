export const id = 364;
export const ids = [364];
export const modules = {
  61586: (uu, Eu, ju) => {
    function su(uu) {
      return uu.features.has("timestamp-query")
    }

    function Uu(uu) {
      return su(uu) ? {
        device: uu,
        markerPipeline: uu.createComputePipeline({
          layout: "auto",
          compute: {
            module: uu.createShaderModule({
              code: "@compute @workgroup_size(1) fn main() {}"
            }),
            entryPoint: "main"
          }
        }),
        querySet: uu.createQuerySet({
          type: "timestamp",
          count: 2
        }),
        resolveBuf: uu.createBuffer({
          size: 16,
          usage: GPUBufferUsage.QUERY_RESOLVE | GPUBufferUsage.COPY_SRC
        }),
        pool: [],
        lastMs: 0,
        inFlight: 0
      } : null
    }

    function Zu(uu, Eu) {
      const ju = Eu.beginComputePass({
        timestampWrites: {
          querySet: uu.querySet,
          beginningOfPassWriteIndex: 0
        }
      });
      ju.setPipeline(uu.markerPipeline), ju.dispatchWorkgroups(1), ju.end()
    }

    function Xu(uu, Eu) {
      const ju = Eu.beginComputePass({
        timestampWrites: {
          querySet: uu.querySet,
          endOfPassWriteIndex: 1
        }
      });
      ju.setPipeline(uu.markerPipeline), ju.dispatchWorkgroups(1), ju.end()
    }

    function lu(uu) {
      if (uu.inFlight > 3) return;
      const Eu = uu.device,
        ju = uu.pool.pop() ?? Eu.createBuffer({
          size: 16,
          usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
        }),
        su = Eu.createCommandEncoder();
      su.resolveQuerySet(uu.querySet, 0, 2, uu.resolveBuf, 0), su.copyBufferToBuffer(uu.resolveBuf, 0, ju, 0, 16), Eu.queue.submit([su.finish()]), uu.inFlight++, ju.mapAsync(GPUMapMode.READ).then((() => {
        const Eu = new BigInt64Array(ju.getMappedRange()),
          su = Number(Eu[1] - Eu[0]) / 1e6;
        su >= 0 && su < 5e3 && (uu.lastMs = uu.lastMs > 0 ? .8 * uu.lastMs + .2 * su : su), ju.unmap(), uu.pool.push(ju), uu.inFlight--
      }), (() => {
        uu.inFlight--
      }))
    }

    function qu(uu) {
      uu.querySet.destroy(), uu.resolveBuf.destroy();
      for (const Eu of uu.pool) Eu.destroy();
      uu.pool.length = 0
    }
    ju.r(Eu), ju.d(Eu, {
      createGpuFrameTimer: () => Uu,
      destroyGpuFrameTimer: () => qu,
      gpuFrameTimerBegin: () => Zu,
      gpuFrameTimerEnd: () => Xu,
      gpuFrameTimerResolve: () => lu,
      gpuTimingSupportedFor: () => su
    })
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);