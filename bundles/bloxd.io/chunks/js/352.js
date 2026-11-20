export const id = 352;
export const ids = [352];
export const modules = {
  60413: (zz, tz, sz) => {
    function Fz(zz) {
      return zz.features.has("timestamp-query")
    }

    function Wz(zz) {
      return Fz(zz) ? {
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

    function Xz(zz, tz) {
      const sz = tz.beginComputePass({
        timestampWrites: {
          querySet: zz.querySet,
          beginningOfPassWriteIndex: 0
        }
      });
      sz.setPipeline(zz.markerPipeline), sz.dispatchWorkgroups(1), sz.end()
    }

    function Oz(zz, tz) {
      const sz = tz.beginComputePass({
        timestampWrites: {
          querySet: zz.querySet,
          endOfPassWriteIndex: 1
        }
      });
      sz.setPipeline(zz.markerPipeline), sz.dispatchWorkgroups(1), sz.end()
    }

    function oz(zz) {
      if (zz.inFlight > 3) return;
      const tz = zz.device,
        sz = zz.pool.pop() ?? tz.createBuffer({
          size: 16,
          usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
        }),
        Fz = tz.createCommandEncoder();
      Fz.resolveQuerySet(zz.querySet, 0, 2, zz.resolveBuf, 0), Fz.copyBufferToBuffer(zz.resolveBuf, 0, sz, 0, 16), tz.queue.submit([Fz.finish()]), zz.inFlight++, sz.mapAsync(GPUMapMode.READ).then((() => {
        const tz = new BigInt64Array(sz.getMappedRange()),
          Fz = Number(tz[1] - tz[0]) / 1e6;
        Fz >= 0 && Fz < 5e3 && (zz.lastMs = zz.lastMs > 0 ? .8 * zz.lastMs + .2 * Fz : Fz), sz.unmap(), zz.pool.push(sz), zz.inFlight--
      }), (() => {
        zz.inFlight--
      }))
    }

    function vz(zz) {
      zz.querySet.destroy(), zz.resolveBuf.destroy();
      for (const tz of zz.pool) tz.destroy();
      zz.pool.length = 0
    }
    sz.r(tz), sz.d(tz, {
      createGpuFrameTimer: () => Wz,
      destroyGpuFrameTimer: () => vz,
      gpuFrameTimerBegin: () => Xz,
      gpuFrameTimerEnd: () => Oz,
      gpuFrameTimerResolve: () => oz,
      gpuTimingSupportedFor: () => Fz
    })
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);