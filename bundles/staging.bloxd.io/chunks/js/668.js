export const id = 668;
export const ids = [668];
export const modules = {
  63906: (ee, ie, He) => {
    function ye(ee) {
      return ee.features.has("timestamp-query")
    }

    function be(ee) {
      return ye(ee) ? {
        device: ee,
        markerPipeline: ee.createComputePipeline({
          layout: "auto",
          compute: {
            module: ee.createShaderModule({
              code: "@compute @workgroup_size(1) fn main() {}"
            }),
            entryPoint: "main"
          }
        }),
        querySet: ee.createQuerySet({
          type: "timestamp",
          count: 2
        }),
        resolveBuf: ee.createBuffer({
          size: 16,
          usage: GPUBufferUsage.QUERY_RESOLVE | GPUBufferUsage.COPY_SRC
        }),
        pool: [],
        lastMs: 0,
        inFlight: 0
      } : null
    }

    function Me(ee, ie) {
      const He = ie.beginComputePass({
        timestampWrites: {
          querySet: ee.querySet,
          beginningOfPassWriteIndex: 0
        }
      });
      He.setPipeline(ee.markerPipeline), He.dispatchWorkgroups(1), He.end()
    }

    function Ke(ee, ie) {
      const He = ie.beginComputePass({
        timestampWrites: {
          querySet: ee.querySet,
          endOfPassWriteIndex: 1
        }
      });
      He.setPipeline(ee.markerPipeline), He.dispatchWorkgroups(1), He.end()
    }

    function Ue(ee) {
      if (ee.inFlight > 3) return;
      const ie = ee.device,
        He = ee.pool.pop() ?? ie.createBuffer({
          size: 16,
          usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
        }),
        ye = ie.createCommandEncoder();
      ye.resolveQuerySet(ee.querySet, 0, 2, ee.resolveBuf, 0), ye.copyBufferToBuffer(ee.resolveBuf, 0, He, 0, 16), ie.queue.submit([ye.finish()]), ee.inFlight++, He.mapAsync(GPUMapMode.READ).then((() => {
        const ie = new BigInt64Array(He.getMappedRange()),
          ye = Number(ie[1] - ie[0]) / 1e6;
        ye >= 0 && ye < 5e3 && (ee.lastMs = ee.lastMs > 0 ? .8 * ee.lastMs + .2 * ye : ye), He.unmap(), ee.pool.push(He), ee.inFlight--
      }), (() => {
        ee.inFlight--
      }))
    }

    function Fe(ee) {
      ee.querySet.destroy(), ee.resolveBuf.destroy();
      for (const ie of ee.pool) ie.destroy();
      ee.pool.length = 0
    }
    He.r(ie), He.d(ie, {
      createGpuFrameTimer: () => be,
      destroyGpuFrameTimer: () => Fe,
      gpuFrameTimerBegin: () => Me,
      gpuFrameTimerEnd: () => Ke,
      gpuFrameTimerResolve: () => Ue,
      gpuTimingSupportedFor: () => ye
    })
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);