export const id = 366;
export const ids = [366];
export const modules = {
  61417: (BB, IB, ZB) => {
    ZB.d(IB, {
      createShadowTask: () => oB
    });
    var TB = null;

    function JB(BB) {
      return TB?.get(BB)
    }

    function oB(BB, IB) {
      const ZB = new Set;
      0;
      const TB = {
        name: "GN",
        engine: BB,
        lg: IB,
        _passes: [],
        async _preload() {
          const BB = [];
          for (const ZB of IB.lights) {
            const IB = ZB.shadowGenerator,
              TB = IB ? JB(IB) : null;
            IB?._preloadShadowTask && TB && BB.push(GB(IB, TB))
          }
          await Promise.all(BB)
        },
        record() {
          TB._passes.length = 0;
          for (const TB of IB.lights) {
            const oB = TB.shadowGenerator,
              GB = oB ? JB(oB) : null;
            if (oB?._ensureShadowTaskState && GB && !oB._preloadPending) {
              ZB.add(oB);
              const TB = oB._ensureShadowTaskState(BB, IB, GB),
                JB = IB._renderableVersion;
              TB._task.record(), TB._recordedVersion = JB
            }
          }
        },
        execute() {
          let TB = 0;
          for (const oB of IB.lights) {
            const GB = oB.shadowGenerator,
              vB = GB ? JB(GB) : null;
            if (GB?._ensureShadowTaskState && GB._renderShadowMap && vB && !GB._preloadPending) {
              ZB.add(GB);
              const JB = GB._shadowTaskState ?? null,
                oB = GB._ensureShadowTaskState(BB, IB, vB);
              if (oB !== JB || oB._recordedVersion !== IB._renderableVersion) {
                const BB = IB._renderableVersion;
                oB._task.record(), oB._recordedVersion = BB
              }
              TB += GB._renderShadowMap(BB, oB)
            }
          }
          return TB
        },
        dispose() {
          TB._passes.length = 0;
          for (const BB of ZB) {
            const IB = BB._shadowTaskState;
            IB && (IB._task.dispose(), BB._shadowTaskState = void 0)
          }
          ZB.clear()
        }
      };
      return TB
    }
    async function GB(BB, IB) {
      BB._preloadPending = IB, await (BB._preloadShadowTask?.(IB)), BB._preloadPending === IB && (BB._preloadPending = void 0)
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);