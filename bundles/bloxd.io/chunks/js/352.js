export const id = 352;
export const ids = [352];
export const modules = {
  61003: (kk, Fk, Bk) => {
    function Rk(kk) {
      return kk.features.has("timestamp-query")
    }

    function tk(kk) {
      return Rk(kk) ? {
        device: kk,
        markerPipeline: kk.createComputePipeline({
          layout: "auto",
          compute: {
            module: kk.createShaderModule({
              code: "@compute @workgroup_size(1) fn main() {}"
            }),
            entryPoint: "main"
          }
        }),
        querySet: kk.createQuerySet({
          type: "timestamp",
          count: 2
        }),
        resolveBuf: kk.createBuffer({
          size: 16,
          usage: GPUBufferUsage.QUERY_RESOLVE | GPUBufferUsage.COPY_SRC
        }),
        pool: [],
        lastMs: 0,
        inFlight: 0
      } : null
    }

    function ak(kk, Fk) {
      const Bk = Fk.beginComputePass({
        timestampWrites: {
          querySet: kk.querySet,
          beginningOfPassWriteIndex: 0
        }
      });
      Bk.setPipeline(kk.markerPipeline), Bk.dispatchWorkgroups(1), Bk.end()
    }

    function Xk(kk, Fk) {
      const Bk = Fk.beginComputePass({
        timestampWrites: {
          querySet: kk.querySet,
          endOfPassWriteIndex: 1
        }
      });
      Bk.setPipeline(kk.markerPipeline), Bk.dispatchWorkgroups(1), Bk.end()
    }

    function bk(kk) {
      if (kk.inFlight > 3) return;
      const Fk = kk.device,
        Bk = kk.pool.pop() ?? Fk.createBuffer({
          size: 16,
          usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
        }),
        Rk = Fk.createCommandEncoder();
      Rk.resolveQuerySet(kk.querySet, 0, 2, kk.resolveBuf, 0), Rk.copyBufferToBuffer(kk.resolveBuf, 0, Bk, 0, 16), Fk.queue.submit([Rk.finish()]), kk.inFlight++, Bk.mapAsync(GPUMapMode.READ).then((() => {
        const Fk = new BigInt64Array(Bk.getMappedRange()),
          Rk = Number(Fk[1] - Fk[0]) / 1e6;
        Rk >= 0 && Rk < 5e3 && (kk.lastMs = kk.lastMs > 0 ? .8 * kk.lastMs + .2 * Rk : Rk), Bk.unmap(), kk.pool.push(Bk), kk.inFlight--
      }), (() => {
        kk.inFlight--
      }))
    }

    function wk(kk) {
      kk.querySet.destroy(), kk.resolveBuf.destroy();
      for (const Fk of kk.pool) Fk.destroy();
      kk.pool.length = 0
    }
    Bk.r(Fk), Bk.d(Fk, {
      createGpuFrameTimer: () => tk,
      destroyGpuFrameTimer: () => wk,
      gpuFrameTimerBegin: () => ak,
      gpuFrameTimerEnd: () => Xk,
      gpuFrameTimerResolve: () => bk,
      gpuTimingSupportedFor: () => Rk
    })
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);