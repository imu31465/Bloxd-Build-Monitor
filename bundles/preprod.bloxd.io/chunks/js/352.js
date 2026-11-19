export const id = 352;
export const ids = [352];
export const modules = {
  60416: (zz, uz, bz) => {
    function Ez(zz) {
      return zz.features.has("timestamp-query")
    }

    function nz(zz) {
      return Ez(zz) ? {
        device: zz,
        markerPipeline: zz.createComputePipeline({
          layout: "auto",
          compute: {
            module: zz.createShaderModule({
              code: "@compute @workgroup_size(1) fn main() {}"
            }),
            entryPoint: "main"
          }
        }),
        querySet: zz.createQuerySet({
          type: "timestamp",
          count: 2
        }),
        resolveBuf: zz.createBuffer({
          size: 16,
          usage: GPUBufferUsage.QUERY_RESOLVE | GPUBufferUsage.COPY_SRC
        }),
        pool: [],
        lastMs: 0,
        inFlight: 0
      } : null
    }

    function iz(zz, uz) {
      const bz = uz.beginComputePass({
        timestampWrites: {
          querySet: zz.querySet,
          beginningOfPassWriteIndex: 0
        }
      });
      bz.setPipeline(zz.markerPipeline), bz.dispatchWorkgroups(1), bz.end()
    }

    function lz(zz, uz) {
      const bz = uz.beginComputePass({
        timestampWrites: {
          querySet: zz.querySet,
          endOfPassWriteIndex: 1
        }
      });
      bz.setPipeline(zz.markerPipeline), bz.dispatchWorkgroups(1), bz.end()
    }

    function Mz(zz) {
      if (zz.inFlight > 3) return;
      const uz = zz.device,
        bz = zz.pool.pop() ?? uz.createBuffer({
          size: 16,
          usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
        }),
        Ez = uz.createCommandEncoder();
      Ez.resolveQuerySet(zz.querySet, 0, 2, zz.resolveBuf, 0), Ez.copyBufferToBuffer(zz.resolveBuf, 0, bz, 0, 16), uz.queue.submit([Ez.finish()]), zz.inFlight++, bz.mapAsync(GPUMapMode.READ).then((() => {
        const uz = new BigInt64Array(bz.getMappedRange()),
          Ez = Number(uz[1] - uz[0]) / 1e6;
        Ez >= 0 && Ez < 5e3 && (zz.lastMs = zz.lastMs > 0 ? .8 * zz.lastMs + .2 * Ez : Ez), bz.unmap(), zz.pool.push(bz), zz.inFlight--
      }), (() => {
        zz.inFlight--
      }))
    }

    function tz(zz) {
      zz.querySet.destroy(), zz.resolveBuf.destroy();
      for (const uz of zz.pool) uz.destroy();
      zz.pool.length = 0
    }
    bz.r(uz), bz.d(uz, {
      createGpuFrameTimer: () => nz,
      destroyGpuFrameTimer: () => tz,
      gpuFrameTimerBegin: () => iz,
      gpuFrameTimerEnd: () => lz,
      gpuFrameTimerResolve: () => Mz,
      gpuTimingSupportedFor: () => Ez
    })
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);