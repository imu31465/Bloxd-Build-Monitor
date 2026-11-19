export const id = 352;
export const ids = [352];
export const modules = {
  60496: (DD, CD, cD) => {
    function ID(DD) {
      return DD.features.has("timestamp-query")
    }

    function pD(DD) {
      return ID(DD) ? {
        device: DD,
        markerPipeline: DD.createComputePipeline({
          layout: "auto",
          compute: {
            module: DD.createShaderModule({
              code: "@compute @workgroup_size(1) fn main() {}"
            }),
            entryPoint: "main"
          }
        }),
        querySet: DD.createQuerySet({
          type: "timestamp",
          count: 2
        }),
        resolveBuf: DD.createBuffer({
          size: 16,
          usage: GPUBufferUsage.QUERY_RESOLVE | GPUBufferUsage.COPY_SRC
        }),
        pool: [],
        lastMs: 0,
        inFlight: 0
      } : null
    }

    function iD(DD, CD) {
      const cD = CD.beginComputePass({
        timestampWrites: {
          querySet: DD.querySet,
          beginningOfPassWriteIndex: 0
        }
      });
      cD.setPipeline(DD.markerPipeline), cD.dispatchWorkgroups(1), cD.end()
    }

    function fD(DD, CD) {
      const cD = CD.beginComputePass({
        timestampWrites: {
          querySet: DD.querySet,
          endOfPassWriteIndex: 1
        }
      });
      cD.setPipeline(DD.markerPipeline), cD.dispatchWorkgroups(1), cD.end()
    }

    function bD(DD) {
      if (DD.inFlight > 3) return;
      const CD = DD.device,
        cD = DD.pool.pop() ?? CD.createBuffer({
          size: 16,
          usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
        }),
        ID = CD.createCommandEncoder();
      ID.resolveQuerySet(DD.querySet, 0, 2, DD.resolveBuf, 0), ID.copyBufferToBuffer(DD.resolveBuf, 0, cD, 0, 16), CD.queue.submit([ID.finish()]), DD.inFlight++, cD.mapAsync(GPUMapMode.READ).then((() => {
        const CD = new BigInt64Array(cD.getMappedRange()),
          ID = Number(CD[1] - CD[0]) / 1e6;
        ID >= 0 && ID < 5e3 && (DD.lastMs = DD.lastMs > 0 ? .8 * DD.lastMs + .2 * ID : ID), cD.unmap(), DD.pool.push(cD), DD.inFlight--
      }), (() => {
        DD.inFlight--
      }))
    }

    function QD(DD) {
      DD.querySet.destroy(), DD.resolveBuf.destroy();
      for (const CD of DD.pool) CD.destroy();
      DD.pool.length = 0
    }
    cD.r(CD), cD.d(CD, {
      createGpuFrameTimer: () => pD,
      destroyGpuFrameTimer: () => QD,
      gpuFrameTimerBegin: () => iD,
      gpuFrameTimerEnd: () => fD,
      gpuFrameTimerResolve: () => bD,
      gpuTimingSupportedFor: () => ID
    })
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);