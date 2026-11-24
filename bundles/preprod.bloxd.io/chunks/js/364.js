export const id = 364;
export const ids = [364];
export const modules = {
  61456: (pp, ip, cp) => {
    function Op(pp) {
      return pp.features.has("timestamp-query")
    }

    function op(pp) {
      return Op(pp) ? {
        device: pp,
        markerPipeline: pp.createComputePipeline({
          layout: "auto",
          compute: {
            module: pp.createShaderModule({
              code: "@compute @workgroup_size(1) fn main() {}"
            }),
            entryPoint: "main"
          }
        }),
        querySet: pp.createQuerySet({
          type: "timestamp",
          count: 2
        }),
        resolveBuf: pp.createBuffer({
          size: 16,
          usage: GPUBufferUsage.QUERY_RESOLVE | GPUBufferUsage.COPY_SRC
        }),
        pool: [],
        lastMs: 0,
        inFlight: 0
      } : null
    }

    function Ip(pp, ip) {
      const cp = ip.beginComputePass({
        timestampWrites: {
          querySet: pp.querySet,
          beginningOfPassWriteIndex: 0
        }
      });
      cp.setPipeline(pp.markerPipeline), cp.dispatchWorkgroups(1), cp.end()
    }

    function Sp(pp, ip) {
      const cp = ip.beginComputePass({
        timestampWrites: {
          querySet: pp.querySet,
          endOfPassWriteIndex: 1
        }
      });
      cp.setPipeline(pp.markerPipeline), cp.dispatchWorkgroups(1), cp.end()
    }

    function xp(pp) {
      if (pp.inFlight > 3) return;
      const ip = pp.device,
        cp = pp.pool.pop() ?? ip.createBuffer({
          size: 16,
          usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
        }),
        Op = ip.createCommandEncoder();
      Op.resolveQuerySet(pp.querySet, 0, 2, pp.resolveBuf, 0), Op.copyBufferToBuffer(pp.resolveBuf, 0, cp, 0, 16), ip.queue.submit([Op.finish()]), pp.inFlight++, cp.mapAsync(GPUMapMode.READ).then((() => {
        const ip = new BigInt64Array(cp.getMappedRange()),
          Op = Number(ip[1] - ip[0]) / 1e6;
        Op >= 0 && Op < 5e3 && (pp.lastMs = pp.lastMs > 0 ? .8 * pp.lastMs + .2 * Op : Op), cp.unmap(), pp.pool.push(cp), pp.inFlight--
      }), (() => {
        pp.inFlight--
      }))
    }

    function Lp(pp) {
      pp.querySet.destroy(), pp.resolveBuf.destroy();
      for (const ip of pp.pool) ip.destroy();
      pp.pool.length = 0
    }
    cp.r(ip), cp.d(ip, {
      createGpuFrameTimer: () => op,
      destroyGpuFrameTimer: () => Lp,
      gpuFrameTimerBegin: () => Ip,
      gpuFrameTimerEnd: () => Sp,
      gpuFrameTimerResolve: () => xp,
      gpuTimingSupportedFor: () => Op
    })
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);