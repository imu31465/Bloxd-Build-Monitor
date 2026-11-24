export const id = 362;
export const ids = [362];
export const modules = {
  61137: (DD, zD, wD) => {
    wD.d(zD, {
      createShadowTask: () => KD
    });
    var pD = null;

    function sD(DD) {
      return pD?.get(DD)
    }

    function KD(DD, zD) {
      const wD = new Set;
      0;
      const pD = {
        name: "rI",
        engine: DD,
        oB: zD,
        _passes: [],
        async _preload() {
          const DD = [];
          for (const wD of zD.lights) {
            const zD = wD.shadowGenerator,
              pD = zD ? sD(zD) : null;
            zD?._preloadShadowTask && pD && DD.push(rD(zD, pD))
          }
          await Promise.all(DD)
        },
        record() {
          pD._passes.length = 0;
          for (const pD of zD.lights) {
            const KD = pD.shadowGenerator,
              rD = KD ? sD(KD) : null;
            if (KD?._ensureShadowTaskState && rD && !KD._preloadPending) {
              wD.add(KD);
              const pD = KD._ensureShadowTaskState(DD, zD, rD),
                sD = zD._renderableVersion;
              pD._task.record(), pD._recordedVersion = sD
            }
          }
        },
        execute() {
          let pD = 0;
          for (const KD of zD.lights) {
            const rD = KD.shadowGenerator,
              LD = rD ? sD(rD) : null;
            if (rD?._ensureShadowTaskState && rD._renderShadowMap && LD && !rD._preloadPending) {
              wD.add(rD);
              const sD = rD._shadowTaskState ?? null,
                KD = rD._ensureShadowTaskState(DD, zD, LD);
              if (KD !== sD || KD._recordedVersion !== zD._renderableVersion) {
                const DD = zD._renderableVersion;
                KD._task.record(), KD._recordedVersion = DD
              }
              pD += rD._renderShadowMap(DD, KD)
            }
          }
          return pD
        },
        dispose() {
          pD._passes.length = 0;
          for (const DD of wD) {
            const zD = DD._shadowTaskState;
            zD && (zD._task.dispose(), DD._shadowTaskState = void 0)
          }
          wD.clear()
        }
      };
      return pD
    }
    async function rD(DD, zD) {
      DD._preloadPending = zD, await (DD._preloadShadowTask?.(zD)), DD._preloadPending === zD && (DD._preloadPending = void 0)
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);