export const id = 360;
export const ids = [360];
export const modules = {
  61416: (SS, HS, gS) => {
    function tS(SS) {
      return SS.features.has("timestamp-query")
    }

    function bS(SS) {
      return tS(SS) ? {
        device: SS,
        markerPipeline: SS.createComputePipeline({
          layout: "auto",
          compute: {
            module: SS.createShaderModule({
              code: "@compute @workgroup_size(1) fn main() {}"
            }),
            entryPoint: "main"
          }
        }),
        querySet: SS.createQuerySet({
          type: "timestamp",
          count: 2
        }),
        resolveBuf: SS.createBuffer({
          size: 16,
          usage: GPUBufferUsage.QUERY_RESOLVE | GPUBufferUsage.COPY_SRC
        }),
        pool: [],
        lastMs: 0,
        inFlight: 0
      } : null
    }

    function XS(SS, HS) {
      const gS = HS.beginComputePass({
        timestampWrites: {
          querySet: SS.querySet,
          beginningOfPassWriteIndex: 0
        }
      });
      gS.setPipeline(SS.markerPipeline), gS.dispatchWorkgroups(1), gS.end()
    }

    function xS(SS, HS) {
      const gS = HS.beginComputePass({
        timestampWrites: {
          querySet: SS.querySet,
          endOfPassWriteIndex: 1
        }
      });
      gS.setPipeline(SS.markerPipeline), gS.dispatchWorkgroups(1), gS.end()
    }

    function NS(SS) {
      if (SS.inFlight > 3) return;
      const HS = SS.device,
        gS = SS.pool.pop() ?? HS.createBuffer({
          size: 16,
          usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
        }),
        tS = HS.createCommandEncoder();
      tS.resolveQuerySet(SS.querySet, 0, 2, SS.resolveBuf, 0), tS.copyBufferToBuffer(SS.resolveBuf, 0, gS, 0, 16), HS.queue.submit([tS.finish()]), SS.inFlight++, gS.mapAsync(GPUMapMode.READ).then((() => {
        const HS = new BigInt64Array(gS.getMappedRange()),
          tS = Number(HS[1] - HS[0]) / 1e6;
        tS >= 0 && tS < 5e3 && (SS.lastMs = SS.lastMs > 0 ? .8 * SS.lastMs + .2 * tS : tS), gS.unmap(), SS.pool.push(gS), SS.inFlight--
      }), (() => {
        SS.inFlight--
      }))
    }

    function qS(SS) {
      SS.querySet.destroy(), SS.resolveBuf.destroy();
      for (const HS of SS.pool) HS.destroy();
      SS.pool.length = 0
    }
    gS.r(HS), gS.d(HS, {
      createGpuFrameTimer: () => bS,
      destroyGpuFrameTimer: () => qS,
      gpuFrameTimerBegin: () => XS,
      gpuFrameTimerEnd: () => xS,
      gpuFrameTimerResolve: () => NS,
      gpuTimingSupportedFor: () => tS
    })
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);