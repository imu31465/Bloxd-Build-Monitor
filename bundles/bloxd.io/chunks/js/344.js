export const id = 344;
export const ids = [344];
export const modules = {
  59512: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      createShadowTask: () => eJ
    });
    var FJ = null;

    function UJ(JJ) {
      return FJ?.get(JJ)
    }

    function eJ(JJ, cJ) {
      const ZJ = new Set;
      0;
      const FJ = {
        name: "Fn",
        engine: JJ,
        iG: cJ,
        _passes: [],
        async _preload() {
          const JJ = [];
          for (const ZJ of cJ.lights) {
            const cJ = ZJ.shadowGenerator,
              FJ = cJ ? UJ(cJ) : null;
            cJ?._preloadShadowTask && FJ && JJ.push(XJ(cJ, FJ))
          }
          await Promise.all(JJ)
        },
        record() {
          FJ._passes.length = 0;
          for (const FJ of cJ.lights) {
            const eJ = FJ.shadowGenerator,
              XJ = eJ ? UJ(eJ) : null;
            if (eJ?._ensureShadowTaskState && XJ && !eJ._preloadPending) {
              ZJ.add(eJ);
              const FJ = eJ._ensureShadowTaskState(JJ, cJ, XJ),
                UJ = cJ._renderableVersion;
              FJ._task.record(), FJ._recordedVersion = UJ
            }
          }
        },
        execute() {
          let FJ = 0;
          for (const eJ of cJ.lights) {
            const XJ = eJ.shadowGenerator,
              AJ = XJ ? UJ(XJ) : null;
            if (XJ?._ensureShadowTaskState && XJ._renderShadowMap && AJ && !XJ._preloadPending) {
              ZJ.add(XJ);
              const UJ = XJ._shadowTaskState ?? null,
                eJ = XJ._ensureShadowTaskState(JJ, cJ, AJ);
              if (eJ !== UJ || eJ._recordedVersion !== cJ._renderableVersion) {
                const JJ = cJ._renderableVersion;
                eJ._task.record(), eJ._recordedVersion = JJ
              }
              FJ += XJ._renderShadowMap(JJ, eJ)
            }
          }
          return FJ
        },
        dispose() {
          FJ._passes.length = 0;
          for (const JJ of ZJ) {
            const cJ = JJ._shadowTaskState;
            cJ && (cJ._task.dispose(), JJ._shadowTaskState = void 0)
          }
          ZJ.clear()
        }
      };
      return FJ
    }
    async function XJ(JJ, cJ) {
      JJ._preloadPending = cJ, await (JJ._preloadShadowTask?.(cJ)), JJ._preloadPending === cJ && (JJ._preloadPending = void 0)
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);