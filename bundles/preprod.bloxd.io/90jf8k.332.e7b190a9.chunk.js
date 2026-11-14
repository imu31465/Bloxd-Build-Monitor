export const id = 332;
export const ids = [332];
export const modules = {
  58994: (FF, WF, SF) => {
    function CF(FF) {
      return FF.features.has("timestamp-query")
    }

    function AF(FF) {
      return CF(FF) ? {
        device: FF,
        markerPipeline: FF.createComputePipeline({
          layout: "auto",
          compute: {
            module: FF.createShaderModule({
              code: "@compute @workgroup_size(1) fn main() {}"
            }),
            entryPoint: "main"
          }
        }),
        querySet: FF.createQuerySet({
          type: "timestamp",
          count: 2
        }),
        resolveBuf: FF.createBuffer({
          size: 16,
          usage: GPUBufferUsage.QUERY_RESOLVE | GPUBufferUsage.COPY_SRC
        }),
        pool: [],
        lastMs: 0,
        inFlight: 0
      } : null
    }

    function uF(FF, WF) {
      const SF = WF.beginComputePass({
        timestampWrites: {
          querySet: FF.querySet,
          beginningOfPassWriteIndex: 0
        }
      });
      SF.setPipeline(FF.markerPipeline), SF.dispatchWorkgroups(1), SF.end()
    }

    function hF(FF, WF) {
      const SF = WF.beginComputePass({
        timestampWrites: {
          querySet: FF.querySet,
          endOfPassWriteIndex: 1
        }
      });
      SF.setPipeline(FF.markerPipeline), SF.dispatchWorkgroups(1), SF.end()
    }

    function bW(FF) {
      if (FF.inFlight > 3) return;
      const WF = FF.device,
        SF = FF.pool.pop() ?? WF.createBuffer({
          size: 16,
          usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
        }),
        CF = WF.createCommandEncoder();
      CF.resolveQuerySet(FF.querySet, 0, 2, FF.resolveBuf, 0), CF.copyBufferToBuffer(FF.resolveBuf, 0, SF, 0, 16), WF.queue.submit([CF.finish()]), FF.inFlight++, SF.mapAsync(GPUMapMode.READ).then((() => {
        const WF = new BigInt64Array(SF.getMappedRange()),
          CF = Number(WF[1] - WF[0]) / 1e6;
        CF >= 0 && CF < 5e3 && (FF.lastMs = FF.lastMs > 0 ? .8 * FF.lastMs + .2 * CF : CF), SF.unmap(), FF.pool.push(SF), FF.inFlight--
      }), (() => {
        FF.inFlight--
      }))
    }

    function dF(FF) {
      FF.querySet.destroy(), FF.resolveBuf.destroy();
      for (const WF of FF.pool) WF.destroy();
      FF.pool.length = 0
    }
    SF.r(WF), SF.d(WF, {
      createGpuFrameTimer: () => AF,
      destroyGpuFrameTimer: () => dF,
      gpuFrameTimerBegin: () => uF,
      gpuFrameTimerEnd: () => hF,
      gpuFrameTimerResolve: () => bW,
      gpuTimingSupportedFor: () => CF
    })
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);