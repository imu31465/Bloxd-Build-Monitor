export const id = 337;
export const ids = [337];
export const modules = {
  59187: (cB, Bc, nc) => {
    function Vc(cB) {
      return cB.features.has("timestamp-query")
    }

    function Ic(cB) {
      return Vc(cB) ? {
        device: cB,
        markerPipeline: cB.createComputePipeline({
          layout: "auto",
          compute: {
            module: cB.createShaderModule({
              code: "@compute @workgroup_size(1) fn main() {}"
            }),
            entryPoint: "main"
          }
        }),
        querySet: cB.createQuerySet({
          type: "timestamp",
          count: 2
        }),
        resolveBuf: cB.createBuffer({
          size: 16,
          usage: GPUBufferUsage.QUERY_RESOLVE | GPUBufferUsage.COPY_SRC
        }),
        pool: [],
        lastMs: 0,
        inFlight: 0
      } : null
    }

    function rB(cB, Bc) {
      const nc = Bc.beginComputePass({
        timestampWrites: {
          querySet: cB.querySet,
          beginningOfPassWriteIndex: 0
        }
      });
      nc.setPipeline(cB.markerPipeline), nc.dispatchWorkgroups(1), nc.end()
    }

    function uc(cB, Bc) {
      const nc = Bc.beginComputePass({
        timestampWrites: {
          querySet: cB.querySet,
          endOfPassWriteIndex: 1
        }
      });
      nc.setPipeline(cB.markerPipeline), nc.dispatchWorkgroups(1), nc.end()
    }

    function sc(cB) {
      if (cB.inFlight > 3) return;
      const Bc = cB.device,
        nc = cB.pool.pop() ?? Bc.createBuffer({
          size: 16,
          usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
        }),
        Vc = Bc.createCommandEncoder();
      Vc.resolveQuerySet(cB.querySet, 0, 2, cB.resolveBuf, 0), Vc.copyBufferToBuffer(cB.resolveBuf, 0, nc, 0, 16), Bc.queue.submit([Vc.finish()]), cB.inFlight++, nc.mapAsync(GPUMapMode.READ).then((() => {
        const Bc = new BigInt64Array(nc.getMappedRange()),
          Vc = Number(Bc[1] - Bc[0]) / 1e6;
        Vc >= 0 && Vc < 5e3 && (cB.lastMs = cB.lastMs > 0 ? .8 * cB.lastMs + .2 * Vc : Vc), nc.unmap(), cB.pool.push(nc), cB.inFlight--
      }), (() => {
        cB.inFlight--
      }))
    }

    function Mc(cB) {
      cB.querySet.destroy(), cB.resolveBuf.destroy();
      for (const Bc of cB.pool) Bc.destroy();
      cB.pool.length = 0
    }
    nc.r(Bc), nc.d(Bc, {
      createGpuFrameTimer: () => Ic,
      destroyGpuFrameTimer: () => Mc,
      gpuFrameTimerBegin: () => rB,
      gpuFrameTimerEnd: () => uc,
      gpuFrameTimerResolve: () => sc,
      gpuTimingSupportedFor: () => Vc
    })
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);