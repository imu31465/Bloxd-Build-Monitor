export const id = 678;
export const ids = [678];
export const modules = {
  64703: (rr, Sr, Qr) => {
    function Zr(rr) {
      return rr.features.has("timestamp-query")
    }

    function Wr(rr) {
      return Zr(rr) ? {
        device: rr,
        markerPipeline: rr.createComputePipeline({
          layout: "auto",
          compute: {
            module: rr.createShaderModule({
              code: "@compute @workgroup_size(1) fn main() {}"
            }),
            entryPoint: "main"
          }
        }),
        querySet: rr.createQuerySet({
          type: "timestamp",
          count: 2
        }),
        resolveBuf: rr.createBuffer({
          size: 16,
          usage: GPUBufferUsage.QUERY_RESOLVE | GPUBufferUsage.COPY_SRC
        }),
        pool: [],
        lastMs: 0,
        inFlight: 0
      } : null
    }

    function ar(rr, Sr) {
      const Qr = Sr.beginComputePass({
        timestampWrites: {
          querySet: rr.querySet,
          beginningOfPassWriteIndex: 0
        }
      });
      Qr.setPipeline(rr.markerPipeline), Qr.dispatchWorkgroups(1), Qr.end()
    }

    function jr(rr, Sr) {
      const Qr = Sr.beginComputePass({
        timestampWrites: {
          querySet: rr.querySet,
          endOfPassWriteIndex: 1
        }
      });
      Qr.setPipeline(rr.markerPipeline), Qr.dispatchWorkgroups(1), Qr.end()
    }

    function Ir(rr) {
      if (rr.inFlight > 3) return;
      const Sr = rr.device,
        Qr = rr.pool.pop() ?? Sr.createBuffer({
          size: 16,
          usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
        }),
        Zr = Sr.createCommandEncoder();
      Zr.resolveQuerySet(rr.querySet, 0, 2, rr.resolveBuf, 0), Zr.copyBufferToBuffer(rr.resolveBuf, 0, Qr, 0, 16), Sr.queue.submit([Zr.finish()]), rr.inFlight++, Qr.mapAsync(GPUMapMode.READ).then((() => {
        const Sr = new BigInt64Array(Qr.getMappedRange()),
          Zr = Number(Sr[1] - Sr[0]) / 1e6;
        Zr >= 0 && Zr < 5e3 && (rr.lastMs = rr.lastMs > 0 ? .8 * rr.lastMs + .2 * Zr : Zr), Qr.unmap(), rr.pool.push(Qr), rr.inFlight--
      }), (() => {
        rr.inFlight--
      }))
    }

    function fr(rr) {
      rr.querySet.destroy(), rr.resolveBuf.destroy();
      for (const Sr of rr.pool) Sr.destroy();
      rr.pool.length = 0
    }
    Qr.r(Sr), Qr.d(Sr, {
      createGpuFrameTimer: () => Wr,
      destroyGpuFrameTimer: () => fr,
      gpuFrameTimerBegin: () => ar,
      gpuFrameTimerEnd: () => jr,
      gpuFrameTimerResolve: () => Ir,
      gpuTimingSupportedFor: () => Zr
    })
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);