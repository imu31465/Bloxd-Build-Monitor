export const id = 368;
export const ids = [368];
export const modules = {
  61631: (QQ, WQ, XQ) => {
    function wQ(QQ) {
      return QQ.features.has("timestamp-query")
    }

    function qQ(QQ) {
      return wQ(QQ) ? {
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

    function TQ(QQ, WQ) {
      const XQ = WQ.beginComputePass({
        timestampWrites: {
          querySet: QQ.querySet,
          beginningOfPassWriteIndex: 0
        }
      });
      XQ.setPipeline(QQ.markerPipeline), XQ.dispatchWorkgroups(1), XQ.end()
    }

    function zQ(QQ, WQ) {
      const XQ = WQ.beginComputePass({
        timestampWrites: {
          querySet: QQ.querySet,
          endOfPassWriteIndex: 1
        }
      });
      XQ.setPipeline(QQ.markerPipeline), XQ.dispatchWorkgroups(1), XQ.end()
    }

    function sQ(QQ) {
      if (QQ.inFlight > 3) return;
      const WQ = QQ.device,
        XQ = QQ.pool.pop() ?? WQ.createBuffer({
          size: 16,
          usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
        }),
        wQ = WQ.createCommandEncoder();
      wQ.resolveQuerySet(QQ.querySet, 0, 2, QQ.resolveBuf, 0), wQ.copyBufferToBuffer(QQ.resolveBuf, 0, XQ, 0, 16), WQ.queue.submit([wQ.finish()]), QQ.inFlight++, XQ.mapAsync(GPUMapMode.READ).then((() => {
        const WQ = new BigInt64Array(XQ.getMappedRange()),
          wQ = Number(WQ[1] - WQ[0]) / 1e6;
        wQ >= 0 && wQ < 5e3 && (QQ.lastMs = QQ.lastMs > 0 ? .8 * QQ.lastMs + .2 * wQ : wQ), XQ.unmap(), QQ.pool.push(XQ), QQ.inFlight--
      }), (() => {
        QQ.inFlight--
      }))
    }

    function FQ(QQ) {
      QQ.querySet.destroy(), QQ.resolveBuf.destroy();
      for (const WQ of QQ.pool) WQ.destroy();
      QQ.pool.length = 0
    }
    XQ.r(WQ), XQ.d(WQ, {
      createGpuFrameTimer: () => qQ,
      destroyGpuFrameTimer: () => FQ,
      gpuFrameTimerBegin: () => TQ,
      gpuFrameTimerEnd: () => zQ,
      gpuFrameTimerResolve: () => sQ,
      gpuTimingSupportedFor: () => wQ
    })
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);