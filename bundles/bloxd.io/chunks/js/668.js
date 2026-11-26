export const id = 668;
export const ids = [668];
export const modules = {
  64388: (VV, eV, xV) => {
    function JV(VV) {
      return VV.features.has("timestamp-query")
    }

    function YV(VV) {
      return JV(VV) ? {
        device: VV,
        markerPipeline: VV.createComputePipeline({
          layout: "auto",
          compute: {
            module: VV.createShaderModule({
              code: "@compute @workgroup_size(1) fn main() {}"
            }),
            entryPoint: "main"
          }
        }),
        querySet: VV.createQuerySet({
          type: "timestamp",
          count: 2
        }),
        resolveBuf: VV.createBuffer({
          size: 16,
          usage: GPUBufferUsage.QUERY_RESOLVE | GPUBufferUsage.COPY_SRC
        }),
        pool: [],
        lastMs: 0,
        inFlight: 0
      } : null
    }

    function UV(VV, eV) {
      const xV = eV.beginComputePass({
        timestampWrites: {
          querySet: VV.querySet,
          beginningOfPassWriteIndex: 0
        }
      });
      xV.setPipeline(VV.markerPipeline), xV.dispatchWorkgroups(1), xV.end()
    }

    function yV(VV, eV) {
      const xV = eV.beginComputePass({
        timestampWrites: {
          querySet: VV.querySet,
          endOfPassWriteIndex: 1
        }
      });
      xV.setPipeline(VV.markerPipeline), xV.dispatchWorkgroups(1), xV.end()
    }

    function pV(VV) {
      if (VV.inFlight > 3) return;
      const eV = VV.device,
        xV = VV.pool.pop() ?? eV.createBuffer({
          size: 16,
          usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
        }),
        JV = eV.createCommandEncoder();
      JV.resolveQuerySet(VV.querySet, 0, 2, VV.resolveBuf, 0), JV.copyBufferToBuffer(VV.resolveBuf, 0, xV, 0, 16), eV.queue.submit([JV.finish()]), VV.inFlight++, xV.mapAsync(GPUMapMode.READ).then((() => {
        const eV = new BigInt64Array(xV.getMappedRange()),
          JV = Number(eV[1] - eV[0]) / 1e6;
        JV >= 0 && JV < 5e3 && (VV.lastMs = VV.lastMs > 0 ? .8 * VV.lastMs + .2 * JV : JV), xV.unmap(), VV.pool.push(xV), VV.inFlight--
      }), (() => {
        VV.inFlight--
      }))
    }

    function QV(VV) {
      VV.querySet.destroy(), VV.resolveBuf.destroy();
      for (const eV of VV.pool) eV.destroy();
      VV.pool.length = 0
    }
    xV.r(eV), xV.d(eV, {
      createGpuFrameTimer: () => YV,
      destroyGpuFrameTimer: () => QV,
      gpuFrameTimerBegin: () => UV,
      gpuFrameTimerEnd: () => yV,
      gpuFrameTimerResolve: () => pV,
      gpuTimingSupportedFor: () => JV
    })
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);