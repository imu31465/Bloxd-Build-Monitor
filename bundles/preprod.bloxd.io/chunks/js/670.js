export const id = 670;
export const ids = [670];
export const modules = {
  63980: (BB, OB, GB) => {
    GB.d(OB, {
      createShadowTask: () => QB
    });
    var YB = null;

    function DB(BB) {
      return YB?.get(BB)
    }

    function QB(BB, OB) {
      const GB = new Set;
      0;
      const YB = {
        name: "KP",
        engine: BB,
        eq: OB,
        _passes: [],
        async _preload() {
          const BB = [];
          for (const GB of OB.lights) {
            const OB = GB.shadowGenerator,
              YB = OB ? DB(OB) : null;
            OB?._preloadShadowTask && YB && BB.push(oB(OB, YB))
          }
          await Promise.all(BB)
        },
        record() {
          YB._passes.length = 0;
          for (const YB of OB.lights) {
            const QB = YB.shadowGenerator,
              oB = QB ? DB(QB) : null;
            if (QB?._ensureShadowTaskState && oB && !QB._preloadPending) {
              GB.add(QB);
              const YB = QB._ensureShadowTaskState(BB, OB, oB),
                DB = OB._renderableVersion;
              YB._task.record(), YB._recordedVersion = DB
            }
          }
        },
        execute() {
          let YB = 0;
          for (const QB of OB.lights) {
            const oB = QB.shadowGenerator,
              jB = oB ? DB(oB) : null;
            if (oB?._ensureShadowTaskState && oB._renderShadowMap && jB && !oB._preloadPending) {
              GB.add(oB);
              const DB = oB._shadowTaskState ?? null,
                QB = oB._ensureShadowTaskState(BB, OB, jB);
              if (QB !== DB || QB._recordedVersion !== OB._renderableVersion) {
                const BB = OB._renderableVersion;
                QB._task.record(), QB._recordedVersion = BB
              }
              YB += oB._renderShadowMap(BB, QB)
            }
          }
          return YB
        },
        dispose() {
          YB._passes.length = 0;
          for (const BB of GB) {
            const OB = BB._shadowTaskState;
            OB && (OB._task.dispose(), BB._shadowTaskState = void 0)
          }
          GB.clear()
        }
      };
      return YB
    }
    async function oB(BB, OB) {
      BB._preloadPending = OB, await (BB._preloadShadowTask?.(OB)), BB._preloadPending === OB && (BB._preloadPending = void 0)
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);