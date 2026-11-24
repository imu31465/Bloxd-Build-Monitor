export const id = 360;
export const ids = [360];
export const modules = {
  61361: (kk, Fk, Ik) => {
    function Xk(kk) {
      return kk.features.has("timestamp-query")
    }

    function Tk(kk) {
      return Xk(kk) ? {
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

    function ik(kk, Fk) {
      const Ik = Fk.beginComputePass({
        timestampWrites: {
          querySet: kk.querySet,
          beginningOfPassWriteIndex: 0
        }
      });
      Ik.setPipeline(kk.markerPipeline), Ik.dispatchWorkgroups(1), Ik.end()
    }

    function yk(kk, Fk) {
      const Ik = Fk.beginComputePass({
        timestampWrites: {
          querySet: kk.querySet,
          endOfPassWriteIndex: 1
        }
      });
      Ik.setPipeline(kk.markerPipeline), Ik.dispatchWorkgroups(1), Ik.end()
    }

    function lk(kk) {
      if (kk.inFlight > 3) return;
      const Fk = kk.device,
        Ik = kk.pool.pop() ?? Fk.createBuffer({
          size: 16,
          usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
        }),
        Xk = Fk.createCommandEncoder();
      Xk.resolveQuerySet(kk.querySet, 0, 2, kk.resolveBuf, 0), Xk.copyBufferToBuffer(kk.resolveBuf, 0, Ik, 0, 16), Fk.queue.submit([Xk.finish()]), kk.inFlight++, Ik.mapAsync(GPUMapMode.READ).then((() => {
        const Fk = new BigInt64Array(Ik.getMappedRange()),
          Xk = Number(Fk[1] - Fk[0]) / 1e6;
        Xk >= 0 && Xk < 5e3 && (kk.lastMs = kk.lastMs > 0 ? .8 * kk.lastMs + .2 * Xk : Xk), Ik.unmap(), kk.pool.push(Ik), kk.inFlight--
      }), (() => {
        kk.inFlight--
      }))
    }

    function ak(kk) {
      kk.querySet.destroy(), kk.resolveBuf.destroy();
      for (const Fk of kk.pool) Fk.destroy();
      kk.pool.length = 0
    }
    Ik.r(Fk), Ik.d(Fk, {
      createGpuFrameTimer: () => Tk,
      destroyGpuFrameTimer: () => ak,
      gpuFrameTimerBegin: () => ik,
      gpuFrameTimerEnd: () => yk,
      gpuFrameTimerResolve: () => lk,
      gpuTimingSupportedFor: () => Xk
    })
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);