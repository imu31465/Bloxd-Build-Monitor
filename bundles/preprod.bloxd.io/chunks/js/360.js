export const id = 360;
export const ids = [360];
export const modules = {
  61022: (CC, zC, ZC) => {
    function QC(CC) {
      return CC.features.has("timestamp-query")
    }

    function wC(CC) {
      return QC(CC) ? {
        device: CC,
        markerPipeline: CC.createComputePipeline({
          layout: "auto",
          compute: {
            module: CC.createShaderModule({
              code: "@compute @workgroup_size(1) fn main() {}"
            }),
            entryPoint: "main"
          }
        }),
        querySet: CC.createQuerySet({
          type: "timestamp",
          count: 2
        }),
        resolveBuf: CC.createBuffer({
          size: 16,
          usage: GPUBufferUsage.QUERY_RESOLVE | GPUBufferUsage.COPY_SRC
        }),
        pool: [],
        lastMs: 0,
        inFlight: 0
      } : null
    }

    function bC(CC, zC) {
      const ZC = zC.beginComputePass({
        timestampWrites: {
          querySet: CC.querySet,
          beginningOfPassWriteIndex: 0
        }
      });
      ZC.setPipeline(CC.markerPipeline), ZC.dispatchWorkgroups(1), ZC.end()
    }

    function nC(CC, zC) {
      const ZC = zC.beginComputePass({
        timestampWrites: {
          querySet: CC.querySet,
          endOfPassWriteIndex: 1
        }
      });
      ZC.setPipeline(CC.markerPipeline), ZC.dispatchWorkgroups(1), ZC.end()
    }

    function fC(CC) {
      if (CC.inFlight > 3) return;
      const zC = CC.device,
        ZC = CC.pool.pop() ?? zC.createBuffer({
          size: 16,
          usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
        }),
        QC = zC.createCommandEncoder();
      QC.resolveQuerySet(CC.querySet, 0, 2, CC.resolveBuf, 0), QC.copyBufferToBuffer(CC.resolveBuf, 0, ZC, 0, 16), zC.queue.submit([QC.finish()]), CC.inFlight++, ZC.mapAsync(GPUMapMode.READ).then((() => {
        const zC = new BigInt64Array(ZC.getMappedRange()),
          QC = Number(zC[1] - zC[0]) / 1e6;
        QC >= 0 && QC < 5e3 && (CC.lastMs = CC.lastMs > 0 ? .8 * CC.lastMs + .2 * QC : QC), ZC.unmap(), CC.pool.push(ZC), CC.inFlight--
      }), (() => {
        CC.inFlight--
      }))
    }

    function oC(CC) {
      CC.querySet.destroy(), CC.resolveBuf.destroy();
      for (const zC of CC.pool) zC.destroy();
      CC.pool.length = 0
    }
    ZC.r(zC), ZC.d(zC, {
      createGpuFrameTimer: () => wC,
      destroyGpuFrameTimer: () => oC,
      gpuFrameTimerBegin: () => bC,
      gpuFrameTimerEnd: () => nC,
      gpuFrameTimerResolve: () => fC,
      gpuTimingSupportedFor: () => QC
    })
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);