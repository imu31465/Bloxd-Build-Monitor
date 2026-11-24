export const id = 360;
export const ids = [360];
export const modules = {
  61123: (DD, zD, wD) => {
    function pD(DD) {
      return DD.features.has("timestamp-query")
    }

    function sD(DD) {
      return pD(DD) ? {
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

    function KD(DD, zD) {
      const wD = zD.beginComputePass({
        timestampWrites: {
          querySet: DD.querySet,
          beginningOfPassWriteIndex: 0
        }
      });
      wD.setPipeline(DD.markerPipeline), wD.dispatchWorkgroups(1), wD.end()
    }

    function rD(DD, zD) {
      const wD = zD.beginComputePass({
        timestampWrites: {
          querySet: DD.querySet,
          endOfPassWriteIndex: 1
        }
      });
      wD.setPipeline(DD.markerPipeline), wD.dispatchWorkgroups(1), wD.end()
    }

    function LD(DD) {
      if (DD.inFlight > 3) return;
      const zD = DD.device,
        wD = DD.pool.pop() ?? zD.createBuffer({
          size: 16,
          usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
        }),
        pD = zD.createCommandEncoder();
      pD.resolveQuerySet(DD.querySet, 0, 2, DD.resolveBuf, 0), pD.copyBufferToBuffer(DD.resolveBuf, 0, wD, 0, 16), zD.queue.submit([pD.finish()]), DD.inFlight++, wD.mapAsync(GPUMapMode.READ).then((() => {
        const zD = new BigInt64Array(wD.getMappedRange()),
          pD = Number(zD[1] - zD[0]) / 1e6;
        pD >= 0 && pD < 5e3 && (DD.lastMs = DD.lastMs > 0 ? .8 * DD.lastMs + .2 * pD : pD), wD.unmap(), DD.pool.push(wD), DD.inFlight--
      }), (() => {
        DD.inFlight--
      }))
    }

    function cD(DD) {
      DD.querySet.destroy(), DD.resolveBuf.destroy();
      for (const zD of DD.pool) zD.destroy();
      DD.pool.length = 0
    }
    wD.r(zD), wD.d(zD, {
      createGpuFrameTimer: () => sD,
      destroyGpuFrameTimer: () => cD,
      gpuFrameTimerBegin: () => KD,
      gpuFrameTimerEnd: () => rD,
      gpuFrameTimerResolve: () => LD,
      gpuTimingSupportedFor: () => pD
    })
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);