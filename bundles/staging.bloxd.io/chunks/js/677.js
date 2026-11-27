export const id = 677;
export const ids = [677];
export const modules = {
  64222: (RR, JR, GR) => {
    function yR(RR) {
      return RR.features.has("timestamp-query")
    }

    function tR(RR) {
      return yR(RR) ? {
        device: RR,
        markerPipeline: RR.createComputePipeline({
          layout: "auto",
          compute: {
            module: RR.createShaderModule({
              code: "@compute @workgroup_size(1) fn main() {}"
            }),
            entryPoint: "main"
          }
        }),
        querySet: RR.createQuerySet({
          type: "timestamp",
          count: 2
        }),
        resolveBuf: RR.createBuffer({
          size: 16,
          usage: GPUBufferUsage.QUERY_RESOLVE | GPUBufferUsage.COPY_SRC
        }),
        pool: [],
        lastMs: 0,
        inFlight: 0
      } : null
    }

    function uR(RR, JR) {
      const GR = JR.beginComputePass({
        timestampWrites: {
          querySet: RR.querySet,
          beginningOfPassWriteIndex: 0
        }
      });
      GR.setPipeline(RR.markerPipeline), GR.dispatchWorkgroups(1), GR.end()
    }

    function ZR(RR, JR) {
      const GR = JR.beginComputePass({
        timestampWrites: {
          querySet: RR.querySet,
          endOfPassWriteIndex: 1
        }
      });
      GR.setPipeline(RR.markerPipeline), GR.dispatchWorkgroups(1), GR.end()
    }

    function qR(RR) {
      if (RR.inFlight > 3) return;
      const JR = RR.device,
        GR = RR.pool.pop() ?? JR.createBuffer({
          size: 16,
          usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
        }),
        yR = JR.createCommandEncoder();
      yR.resolveQuerySet(RR.querySet, 0, 2, RR.resolveBuf, 0), yR.copyBufferToBuffer(RR.resolveBuf, 0, GR, 0, 16), JR.queue.submit([yR.finish()]), RR.inFlight++, GR.mapAsync(GPUMapMode.READ).then((() => {
        const JR = new BigInt64Array(GR.getMappedRange()),
          yR = Number(JR[1] - JR[0]) / 1e6;
        yR >= 0 && yR < 5e3 && (RR.lastMs = RR.lastMs > 0 ? .8 * RR.lastMs + .2 * yR : yR), GR.unmap(), RR.pool.push(GR), RR.inFlight--
      }), (() => {
        RR.inFlight--
      }))
    }

    function iR(RR) {
      RR.querySet.destroy(), RR.resolveBuf.destroy();
      for (const JR of RR.pool) JR.destroy();
      RR.pool.length = 0
    }
    GR.r(JR), GR.d(JR, {
      createGpuFrameTimer: () => tR,
      destroyGpuFrameTimer: () => iR,
      gpuFrameTimerBegin: () => uR,
      gpuFrameTimerEnd: () => ZR,
      gpuFrameTimerResolve: () => qR,
      gpuTimingSupportedFor: () => yR
    })
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);