export const id = 352;
export const ids = [352];
export const modules = {
  60302: (YY, rY, DY) => {
    function FY(YY) {
      return YY.features.has("timestamp-query")
    }

    function AY(YY) {
      return FY(YY) ? {
        device: YY,
        markerPipeline: YY.createComputePipeline({
          layout: "auto",
          compute: {
            module: YY.createShaderModule({
              code: "@compute @workgroup_size(1) fn main() {}"
            }),
            entryPoint: "main"
          }
        }),
        querySet: YY.createQuerySet({
          type: "timestamp",
          count: 2
        }),
        resolveBuf: YY.createBuffer({
          size: 16,
          usage: GPUBufferUsage.QUERY_RESOLVE | GPUBufferUsage.COPY_SRC
        }),
        pool: [],
        lastMs: 0,
        inFlight: 0
      } : null
    }

    function IY(YY, rY) {
      const DY = rY.beginComputePass({
        timestampWrites: {
          querySet: YY.querySet,
          beginningOfPassWriteIndex: 0
        }
      });
      DY.setPipeline(YY.markerPipeline), DY.dispatchWorkgroups(1), DY.end()
    }

    function RY(YY, rY) {
      const DY = rY.beginComputePass({
        timestampWrites: {
          querySet: YY.querySet,
          endOfPassWriteIndex: 1
        }
      });
      DY.setPipeline(YY.markerPipeline), DY.dispatchWorkgroups(1), DY.end()
    }

    function OY(YY) {
      if (YY.inFlight > 3) return;
      const rY = YY.device,
        DY = YY.pool.pop() ?? rY.createBuffer({
          size: 16,
          usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
        }),
        FY = rY.createCommandEncoder();
      FY.resolveQuerySet(YY.querySet, 0, 2, YY.resolveBuf, 0), FY.copyBufferToBuffer(YY.resolveBuf, 0, DY, 0, 16), rY.queue.submit([FY.finish()]), YY.inFlight++, DY.mapAsync(GPUMapMode.READ).then((() => {
        const rY = new BigInt64Array(DY.getMappedRange()),
          FY = Number(rY[1] - rY[0]) / 1e6;
        FY >= 0 && FY < 5e3 && (YY.lastMs = YY.lastMs > 0 ? .8 * YY.lastMs + .2 * FY : FY), DY.unmap(), YY.pool.push(DY), YY.inFlight--
      }), (() => {
        YY.inFlight--
      }))
    }

    function gY(YY) {
      YY.querySet.destroy(), YY.resolveBuf.destroy();
      for (const rY of YY.pool) rY.destroy();
      YY.pool.length = 0
    }
    DY.r(rY), DY.d(rY, {
      createGpuFrameTimer: () => AY,
      destroyGpuFrameTimer: () => gY,
      gpuFrameTimerBegin: () => IY,
      gpuFrameTimerEnd: () => RY,
      gpuFrameTimerResolve: () => OY,
      gpuTimingSupportedFor: () => FY
    })
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);