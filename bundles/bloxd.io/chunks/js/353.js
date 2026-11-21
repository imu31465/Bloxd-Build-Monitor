export const id = 353;
export const ids = [353];
export const modules = {
  60731: (QQ, FQ, wQ) => {
    function LQ(QQ) {
      return QQ.features.has("timestamp-query")
    }

    function qQ(QQ) {
      return LQ(QQ) ? {
        device: QQ,
        markerPipeline: QQ.createComputePipeline({
          layout: "auto",
          compute: {
            module: QQ.createShaderModule({
              code: "@compute @workgroup_size(1) fn main() {}"
            }),
            entryPoint: "main"
          }
        }),
        querySet: QQ.createQuerySet({
          type: "timestamp",
          count: 2
        }),
        resolveBuf: QQ.createBuffer({
          size: 16,
          usage: GPUBufferUsage.QUERY_RESOLVE | GPUBufferUsage.COPY_SRC
        }),
        pool: [],
        lastMs: 0,
        inFlight: 0
      } : null
    }

    function oQ(QQ, FQ) {
      const wQ = FQ.beginComputePass({
        timestampWrites: {
          querySet: QQ.querySet,
          beginningOfPassWriteIndex: 0
        }
      });
      wQ.setPipeline(QQ.markerPipeline), wQ.dispatchWorkgroups(1), wQ.end()
    }

    function DQ(QQ, FQ) {
      const wQ = FQ.beginComputePass({
        timestampWrites: {
          querySet: QQ.querySet,
          endOfPassWriteIndex: 1
        }
      });
      wQ.setPipeline(QQ.markerPipeline), wQ.dispatchWorkgroups(1), wQ.end()
    }

    function kQ(QQ) {
      if (QQ.inFlight > 3) return;
      const FQ = QQ.device,
        wQ = QQ.pool.pop() ?? FQ.createBuffer({
          size: 16,
          usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
        }),
        LQ = FQ.createCommandEncoder();
      LQ.resolveQuerySet(QQ.querySet, 0, 2, QQ.resolveBuf, 0), LQ.copyBufferToBuffer(QQ.resolveBuf, 0, wQ, 0, 16), FQ.queue.submit([LQ.finish()]), QQ.inFlight++, wQ.mapAsync(GPUMapMode.READ).then((() => {
        const FQ = new BigInt64Array(wQ.getMappedRange()),
          LQ = Number(FQ[1] - FQ[0]) / 1e6;
        LQ >= 0 && LQ < 5e3 && (QQ.lastMs = QQ.lastMs > 0 ? .8 * QQ.lastMs + .2 * LQ : LQ), wQ.unmap(), QQ.pool.push(wQ), QQ.inFlight--
      }), (() => {
        QQ.inFlight--
      }))
    }

    function vQ(QQ) {
      QQ.querySet.destroy(), QQ.resolveBuf.destroy();
      for (const FQ of QQ.pool) FQ.destroy();
      QQ.pool.length = 0
    }
    wQ.r(FQ), wQ.d(FQ, {
      createGpuFrameTimer: () => qQ,
      destroyGpuFrameTimer: () => vQ,
      gpuFrameTimerBegin: () => oQ,
      gpuFrameTimerEnd: () => DQ,
      gpuFrameTimerResolve: () => kQ,
      gpuTimingSupportedFor: () => LQ
    })
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);