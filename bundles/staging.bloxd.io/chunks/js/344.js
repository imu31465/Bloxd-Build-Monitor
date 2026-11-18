export const id = 344;
export const ids = [344];
export const modules = {
  59817: (BB, TB, dB) => {
    dB.d(TB, {
      createShadowTask: () => pB
    });
    var VB = null;

    function yB(BB) {
      return VB?.get(BB)
    }

    function pB(BB, TB) {
      const dB = new Set;
      0;
      const VB = {
        name: "YD",
        engine: BB,
        Gu: TB,
        _passes: [],
        async _preload() {
          const BB = [];
          for (const dB of TB.lights) {
            const TB = dB.shadowGenerator,
              VB = TB ? yB(TB) : null;
            TB?._preloadShadowTask && VB && BB.push(lB(TB, VB))
          }
          await Promise.all(BB)
        },
        record() {
          VB._passes.length = 0;
          for (const VB of TB.lights) {
            const pB = VB.shadowGenerator,
              lB = pB ? yB(pB) : null;
            if (pB?._ensureShadowTaskState && lB && !pB._preloadPending) {
              dB.add(pB);
              const VB = pB._ensureShadowTaskState(BB, TB, lB),
                yB = TB._renderableVersion;
              VB._task.record(), VB._recordedVersion = yB
            }
          }
        },
        execute() {
          let VB = 0;
          for (const pB of TB.lights) {
            const lB = pB.shadowGenerator,
              JB = lB ? yB(lB) : null;
            if (lB?._ensureShadowTaskState && lB._renderShadowMap && JB && !lB._preloadPending) {
              dB.add(lB);
              const yB = lB._shadowTaskState ?? null,
                pB = lB._ensureShadowTaskState(BB, TB, JB);
              if (pB !== yB || pB._recordedVersion !== TB._renderableVersion) {
                const BB = TB._renderableVersion;
                pB._task.record(), pB._recordedVersion = BB
              }
              VB += lB._renderShadowMap(BB, pB)
            }
          }
          return VB
        },
        dispose() {
          VB._passes.length = 0;
          for (const BB of dB) {
            const TB = BB._shadowTaskState;
            TB && (TB._task.dispose(), BB._shadowTaskState = void 0)
          }
          dB.clear()
        }
      };
      return VB
    }
    async function lB(BB, TB) {
      BB._preloadPending = TB, await (BB._preloadShadowTask?.(TB)), BB._preloadPending === TB && (BB._preloadPending = void 0)
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);