export const id = 366;
export const ids = [366];
export const modules = {
  61528: (BB, jB, zB) => {
    zB.d(jB, {
      createShadowTask: () => dB
    });
    var QB = null;

    function nB(BB) {
      return QB?.get(BB)
    }

    function dB(BB, jB) {
      const zB = new Set;
      0;
      const QB = {
        name: "yJ",
        engine: BB,
        ny: jB,
        _passes: [],
        async _preload() {
          const BB = [];
          for (const zB of jB.lights) {
            const jB = zB.shadowGenerator,
              QB = jB ? nB(jB) : null;
            jB?._preloadShadowTask && QB && BB.push(IB(jB, QB))
          }
          await Promise.all(BB)
        },
        record() {
          QB._passes.length = 0;
          for (const QB of jB.lights) {
            const dB = QB.shadowGenerator,
              IB = dB ? nB(dB) : null;
            if (dB?._ensureShadowTaskState && IB && !dB._preloadPending) {
              zB.add(dB);
              const QB = dB._ensureShadowTaskState(BB, jB, IB),
                nB = jB._renderableVersion;
              QB._task.record(), QB._recordedVersion = nB
            }
          }
        },
        execute() {
          let QB = 0;
          for (const dB of jB.lights) {
            const IB = dB.shadowGenerator,
              NB = IB ? nB(IB) : null;
            if (IB?._ensureShadowTaskState && IB._renderShadowMap && NB && !IB._preloadPending) {
              zB.add(IB);
              const nB = IB._shadowTaskState ?? null,
                dB = IB._ensureShadowTaskState(BB, jB, NB);
              if (dB !== nB || dB._recordedVersion !== jB._renderableVersion) {
                const BB = jB._renderableVersion;
                dB._task.record(), dB._recordedVersion = BB
              }
              QB += IB._renderShadowMap(BB, dB)
            }
          }
          return QB
        },
        dispose() {
          QB._passes.length = 0;
          for (const BB of zB) {
            const jB = BB._shadowTaskState;
            jB && (jB._task.dispose(), BB._shadowTaskState = void 0)
          }
          zB.clear()
        }
      };
      return QB
    }
    async function IB(BB, jB) {
      BB._preloadPending = jB, await (BB._preloadShadowTask?.(jB)), BB._preloadPending === jB && (BB._preloadPending = void 0)
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);