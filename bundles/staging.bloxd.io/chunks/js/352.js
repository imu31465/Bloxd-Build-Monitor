export const id = 352;
export const ids = [352];
export const modules = {
  61100: (uu, Ru, yu) => {
    function Eu(uu) {
      return uu.features.has("timestamp-query")
    }

    function Ku(uu) {
      return Eu(uu) ? {
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

    function Qu(uu, Ru) {
      const yu = Ru.beginComputePass({
        timestampWrites: {
          querySet: uu.querySet,
          beginningOfPassWriteIndex: 0
        }
      });
      yu.setPipeline(uu.markerPipeline), yu.dispatchWorkgroups(1), yu.end()
    }

    function mu(uu, Ru) {
      const yu = Ru.beginComputePass({
        timestampWrites: {
          querySet: uu.querySet,
          endOfPassWriteIndex: 1
        }
      });
      yu.setPipeline(uu.markerPipeline), yu.dispatchWorkgroups(1), yu.end()
    }

    function Ju(uu) {
      if (uu.inFlight > 3) return;
      const Ru = uu.device,
        yu = uu.pool.pop() ?? Ru.createBuffer({
          size: 16,
          usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
        }),
        Eu = Ru.createCommandEncoder();
      Eu.resolveQuerySet(uu.querySet, 0, 2, uu.resolveBuf, 0), Eu.copyBufferToBuffer(uu.resolveBuf, 0, yu, 0, 16), Ru.queue.submit([Eu.finish()]), uu.inFlight++, yu.mapAsync(GPUMapMode.READ).then((() => {
        const Ru = new BigInt64Array(yu.getMappedRange()),
          Eu = Number(Ru[1] - Ru[0]) / 1e6;
        Eu >= 0 && Eu < 5e3 && (uu.lastMs = uu.lastMs > 0 ? .8 * uu.lastMs + .2 * Eu : Eu), yu.unmap(), uu.pool.push(yu), uu.inFlight--
      }), (() => {
        uu.inFlight--
      }))
    }

    function Nu(uu) {
      uu.querySet.destroy(), uu.resolveBuf.destroy();
      for (const Ru of uu.pool) Ru.destroy();
      uu.pool.length = 0
    }
    yu.r(Ru), yu.d(Ru, {
      createGpuFrameTimer: () => Ku,
      destroyGpuFrameTimer: () => Nu,
      gpuFrameTimerBegin: () => Qu,
      gpuFrameTimerEnd: () => mu,
      gpuFrameTimerResolve: () => Ju,
      gpuTimingSupportedFor: () => Eu
    })
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);