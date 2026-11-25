export const id = 364;
export const ids = [364];
export const modules = {
  61904: (GG, bG, ZG) => {
    function wG(GG) {
      return GG.features.has("timestamp-query")
    }

    function SG(GG) {
      return wG(GG) ? {
        device: GG,
        markerPipeline: GG.createComputePipeline({
          layout: "auto",
          compute: {
            module: GG.createShaderModule({
              code: "@compute @workgroup_size(1) fn main() {}"
            }),
            entryPoint: "main"
          }
        }),
        querySet: GG.createQuerySet({
          type: "timestamp",
          count: 2
        }),
        resolveBuf: GG.createBuffer({
          size: 16,
          usage: GPUBufferUsage.QUERY_RESOLVE | GPUBufferUsage.COPY_SRC
        }),
        pool: [],
        lastMs: 0,
        inFlight: 0
      } : null
    }

    function LG(GG, bG) {
      const ZG = bG.beginComputePass({
        timestampWrites: {
          querySet: GG.querySet,
          beginningOfPassWriteIndex: 0
        }
      });
      ZG.setPipeline(GG.markerPipeline), ZG.dispatchWorkgroups(1), ZG.end()
    }

    function yG(GG, bG) {
      const ZG = bG.beginComputePass({
        timestampWrites: {
          querySet: GG.querySet,
          endOfPassWriteIndex: 1
        }
      });
      ZG.setPipeline(GG.markerPipeline), ZG.dispatchWorkgroups(1), ZG.end()
    }

    function kG(GG) {
      if (GG.inFlight > 3) return;
      const bG = GG.device,
        ZG = GG.pool.pop() ?? bG.createBuffer({
          size: 16,
          usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
        }),
        wG = bG.createCommandEncoder();
      wG.resolveQuerySet(GG.querySet, 0, 2, GG.resolveBuf, 0), wG.copyBufferToBuffer(GG.resolveBuf, 0, ZG, 0, 16), bG.queue.submit([wG.finish()]), GG.inFlight++, ZG.mapAsync(GPUMapMode.READ).then((() => {
        const bG = new BigInt64Array(ZG.getMappedRange()),
          wG = Number(bG[1] - bG[0]) / 1e6;
        wG >= 0 && wG < 5e3 && (GG.lastMs = GG.lastMs > 0 ? .8 * GG.lastMs + .2 * wG : wG), ZG.unmap(), GG.pool.push(ZG), GG.inFlight--
      }), (() => {
        GG.inFlight--
      }))
    }

    function UG(GG) {
      GG.querySet.destroy(), GG.resolveBuf.destroy();
      for (const bG of GG.pool) bG.destroy();
      GG.pool.length = 0
    }
    ZG.r(bG), ZG.d(bG, {
      createGpuFrameTimer: () => SG,
      destroyGpuFrameTimer: () => UG,
      gpuFrameTimerBegin: () => LG,
      gpuFrameTimerEnd: () => yG,
      gpuFrameTimerResolve: () => kG,
      gpuTimingSupportedFor: () => wG
    })
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);