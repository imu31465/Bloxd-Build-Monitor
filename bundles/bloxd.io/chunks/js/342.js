export const id = 342;
export const ids = [342];
export const modules = {
  59807: (BB, TB, dB) => {
    function VB(BB) {
      return BB.features.has("timestamp-query")
    }

    function yB(BB) {
      return VB(BB) ? {
        device: BB,
        markerPipeline: BB.createComputePipeline({
          layout: "auto",
          compute: {
            module: BB.createShaderModule({
              code: "@compute @workgroup_size(1) fn main() {}"
            }),
            entryPoint: "main"
          }
        }),
        querySet: BB.createQuerySet({
          type: "timestamp",
          count: 2
        }),
        resolveBuf: BB.createBuffer({
          size: 16,
          usage: GPUBufferUsage.QUERY_RESOLVE | GPUBufferUsage.COPY_SRC
        }),
        pool: [],
        lastMs: 0,
        inFlight: 0
      } : null
    }

    function pB(BB, TB) {
      const dB = TB.beginComputePass({
        timestampWrites: {
          querySet: BB.querySet,
          beginningOfPassWriteIndex: 0
        }
      });
      dB.setPipeline(BB.markerPipeline), dB.dispatchWorkgroups(1), dB.end()
    }

    function lB(BB, TB) {
      const dB = TB.beginComputePass({
        timestampWrites: {
          querySet: BB.querySet,
          endOfPassWriteIndex: 1
        }
      });
      dB.setPipeline(BB.markerPipeline), dB.dispatchWorkgroups(1), dB.end()
    }

    function JB(BB) {
      if (BB.inFlight > 3) return;
      const TB = BB.device,
        dB = BB.pool.pop() ?? TB.createBuffer({
          size: 16,
          usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
        }),
        VB = TB.createCommandEncoder();
      VB.resolveQuerySet(BB.querySet, 0, 2, BB.resolveBuf, 0), VB.copyBufferToBuffer(BB.resolveBuf, 0, dB, 0, 16), TB.queue.submit([VB.finish()]), BB.inFlight++, dB.mapAsync(GPUMapMode.READ).then((() => {
        const TB = new BigInt64Array(dB.getMappedRange()),
          VB = Number(TB[1] - TB[0]) / 1e6;
        VB >= 0 && VB < 5e3 && (BB.lastMs = BB.lastMs > 0 ? .8 * BB.lastMs + .2 * VB : VB), dB.unmap(), BB.pool.push(dB), BB.inFlight--
      }), (() => {
        BB.inFlight--
      }))
    }

    function YB(BB) {
      BB.querySet.destroy(), BB.resolveBuf.destroy();
      for (const TB of BB.pool) TB.destroy();
      BB.pool.length = 0
    }
    dB.r(TB), dB.d(TB, {
      createGpuFrameTimer: () => yB,
      destroyGpuFrameTimer: () => YB,
      gpuFrameTimerBegin: () => pB,
      gpuFrameTimerEnd: () => lB,
      gpuFrameTimerResolve: () => JB,
      gpuTimingSupportedFor: () => VB
    })
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);