export const id = 668;
export const ids = [668];
export const modules = {
  63999: (MM, rM, iM) => {
    function OM(MM) {
      return MM.features.has("timestamp-query")
    }

    function SM(MM) {
      return OM(MM) ? {
        device: MM,
        markerPipeline: MM.createComputePipeline({
          layout: "auto",
          compute: {
            module: MM.createShaderModule({
              code: "@compute @workgroup_size(1) fn main() {}"
            }),
            entryPoint: "main"
          }
        }),
        querySet: MM.createQuerySet({
          type: "timestamp",
          count: 2
        }),
        resolveBuf: MM.createBuffer({
          size: 16,
          usage: GPUBufferUsage.QUERY_RESOLVE | GPUBufferUsage.COPY_SRC
        }),
        pool: [],
        lastMs: 0,
        inFlight: 0
      } : null
    }

    function jM(MM, rM) {
      const iM = rM.beginComputePass({
        timestampWrites: {
          querySet: MM.querySet,
          beginningOfPassWriteIndex: 0
        }
      });
      iM.setPipeline(MM.markerPipeline), iM.dispatchWorkgroups(1), iM.end()
    }

    function aM(MM, rM) {
      const iM = rM.beginComputePass({
        timestampWrites: {
          querySet: MM.querySet,
          endOfPassWriteIndex: 1
        }
      });
      iM.setPipeline(MM.markerPipeline), iM.dispatchWorkgroups(1), iM.end()
    }

    function PM(MM) {
      if (MM.inFlight > 3) return;
      const rM = MM.device,
        iM = MM.pool.pop() ?? rM.createBuffer({
          size: 16,
          usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
        }),
        OM = rM.createCommandEncoder();
      OM.resolveQuerySet(MM.querySet, 0, 2, MM.resolveBuf, 0), OM.copyBufferToBuffer(MM.resolveBuf, 0, iM, 0, 16), rM.queue.submit([OM.finish()]), MM.inFlight++, iM.mapAsync(GPUMapMode.READ).then((() => {
        const rM = new BigInt64Array(iM.getMappedRange()),
          OM = Number(rM[1] - rM[0]) / 1e6;
        OM >= 0 && OM < 5e3 && (MM.lastMs = MM.lastMs > 0 ? .8 * MM.lastMs + .2 * OM : OM), iM.unmap(), MM.pool.push(iM), MM.inFlight--
      }), (() => {
        MM.inFlight--
      }))
    }

    function nM(MM) {
      MM.querySet.destroy(), MM.resolveBuf.destroy();
      for (const rM of MM.pool) rM.destroy();
      MM.pool.length = 0
    }
    iM.r(rM), iM.d(rM, {
      createGpuFrameTimer: () => SM,
      destroyGpuFrameTimer: () => nM,
      gpuFrameTimerBegin: () => jM,
      gpuFrameTimerEnd: () => aM,
      gpuFrameTimerResolve: () => PM,
      gpuTimingSupportedFor: () => OM
    })
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);