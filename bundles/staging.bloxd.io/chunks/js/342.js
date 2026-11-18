export const id = 342;
export const ids = [342];
export const modules = {
  59499: (JJ, cJ, ZJ) => {
    function FJ(JJ) {
      return JJ.features.has("timestamp-query")
    }

    function UJ(JJ) {
      return FJ(JJ) ? {
        device: JJ,
        markerPipeline: JJ.createComputePipeline({
          layout: "auto",
          compute: {
            module: JJ.createShaderModule({
              code: "@compute @workgroup_size(1) fn main() {}"
            }),
            entryPoint: "main"
          }
        }),
        querySet: JJ.createQuerySet({
          type: "timestamp",
          count: 2
        }),
        resolveBuf: JJ.createBuffer({
          size: 16,
          usage: GPUBufferUsage.QUERY_RESOLVE | GPUBufferUsage.COPY_SRC
        }),
        pool: [],
        lastMs: 0,
        inFlight: 0
      } : null
    }

    function eJ(JJ, cJ) {
      const ZJ = cJ.beginComputePass({
        timestampWrites: {
          querySet: JJ.querySet,
          beginningOfPassWriteIndex: 0
        }
      });
      ZJ.setPipeline(JJ.markerPipeline), ZJ.dispatchWorkgroups(1), ZJ.end()
    }

    function XJ(JJ, cJ) {
      const ZJ = cJ.beginComputePass({
        timestampWrites: {
          querySet: JJ.querySet,
          endOfPassWriteIndex: 1
        }
      });
      ZJ.setPipeline(JJ.markerPipeline), ZJ.dispatchWorkgroups(1), ZJ.end()
    }

    function AJ(JJ) {
      if (JJ.inFlight > 3) return;
      const cJ = JJ.device,
        ZJ = JJ.pool.pop() ?? cJ.createBuffer({
          size: 16,
          usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
        }),
        FJ = cJ.createCommandEncoder();
      FJ.resolveQuerySet(JJ.querySet, 0, 2, JJ.resolveBuf, 0), FJ.copyBufferToBuffer(JJ.resolveBuf, 0, ZJ, 0, 16), cJ.queue.submit([FJ.finish()]), JJ.inFlight++, ZJ.mapAsync(GPUMapMode.READ).then((() => {
        const cJ = new BigInt64Array(ZJ.getMappedRange()),
          FJ = Number(cJ[1] - cJ[0]) / 1e6;
        FJ >= 0 && FJ < 5e3 && (JJ.lastMs = JJ.lastMs > 0 ? .8 * JJ.lastMs + .2 * FJ : FJ), ZJ.unmap(), JJ.pool.push(ZJ), JJ.inFlight--
      }), (() => {
        JJ.inFlight--
      }))
    }

    function qJ(JJ) {
      JJ.querySet.destroy(), JJ.resolveBuf.destroy();
      for (const cJ of JJ.pool) cJ.destroy();
      JJ.pool.length = 0
    }
    ZJ.r(cJ), ZJ.d(cJ, {
      createGpuFrameTimer: () => UJ,
      destroyGpuFrameTimer: () => qJ,
      gpuFrameTimerBegin: () => eJ,
      gpuFrameTimerEnd: () => XJ,
      gpuFrameTimerResolve: () => AJ,
      gpuTimingSupportedFor: () => FJ
    })
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);