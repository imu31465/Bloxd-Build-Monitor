export const id = 359;
export const ids = [359];
export const modules = {
  60767: (kk, ek, ik) => {
    function Dk(kk) {
      return kk.features.has("timestamp-query")
    }

    function fk(kk) {
      return Dk(kk) ? {
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

    function Sk(kk, ek) {
      const ik = ek.beginComputePass({
        timestampWrites: {
          querySet: kk.querySet,
          beginningOfPassWriteIndex: 0
        }
      });
      ik.setPipeline(kk.markerPipeline), ik.dispatchWorkgroups(1), ik.end()
    }

    function bk(kk, ek) {
      const ik = ek.beginComputePass({
        timestampWrites: {
          querySet: kk.querySet,
          endOfPassWriteIndex: 1
        }
      });
      ik.setPipeline(kk.markerPipeline), ik.dispatchWorkgroups(1), ik.end()
    }

    function rk(kk) {
      if (kk.inFlight > 3) return;
      const ek = kk.device,
        ik = kk.pool.pop() ?? ek.createBuffer({
          size: 16,
          usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
        }),
        Dk = ek.createCommandEncoder();
      Dk.resolveQuerySet(kk.querySet, 0, 2, kk.resolveBuf, 0), Dk.copyBufferToBuffer(kk.resolveBuf, 0, ik, 0, 16), ek.queue.submit([Dk.finish()]), kk.inFlight++, ik.mapAsync(GPUMapMode.READ).then((() => {
        const ek = new BigInt64Array(ik.getMappedRange()),
          Dk = Number(ek[1] - ek[0]) / 1e6;
        Dk >= 0 && Dk < 5e3 && (kk.lastMs = kk.lastMs > 0 ? .8 * kk.lastMs + .2 * Dk : Dk), ik.unmap(), kk.pool.push(ik), kk.inFlight--
      }), (() => {
        kk.inFlight--
      }))
    }

    function Pk(kk) {
      kk.querySet.destroy(), kk.resolveBuf.destroy();
      for (const ek of kk.pool) ek.destroy();
      kk.pool.length = 0
    }
    ik.r(ek), ik.d(ek, {
      createGpuFrameTimer: () => fk,
      destroyGpuFrameTimer: () => Pk,
      gpuFrameTimerBegin: () => Sk,
      gpuFrameTimerEnd: () => bk,
      gpuFrameTimerResolve: () => rk,
      gpuTimingSupportedFor: () => Dk
    })
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);