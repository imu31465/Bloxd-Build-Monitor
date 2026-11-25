export const id = 366;
export const ids = [366];
export const modules = {
  61916: (GG, bG, ZG) => {
    ZG.d(bG, {
      createShadowTask: () => LG
    });
    var wG = null;

    function SG(GG) {
      return wG?.get(GG)
    }

    function LG(GG, bG) {
      const ZG = new Set;
      0;
      const wG = {
        name: "xQ",
        engine: GG,
        Ah: bG,
        _passes: [],
        async _preload() {
          const GG = [];
          for (const ZG of bG.lights) {
            const bG = ZG.shadowGenerator,
              wG = bG ? SG(bG) : null;
            bG?._preloadShadowTask && wG && GG.push(yG(bG, wG))
          }
          await Promise.all(GG)
        },
        record() {
          wG._passes.length = 0;
          for (const wG of bG.lights) {
            const LG = wG.shadowGenerator,
              yG = LG ? SG(LG) : null;
            if (LG?._ensureShadowTaskState && yG && !LG._preloadPending) {
              ZG.add(LG);
              const wG = LG._ensureShadowTaskState(GG, bG, yG),
                SG = bG._renderableVersion;
              wG._task.record(), wG._recordedVersion = SG
            }
          }
        },
        execute() {
          let wG = 0;
          for (const LG of bG.lights) {
            const yG = LG.shadowGenerator,
              kG = yG ? SG(yG) : null;
            if (yG?._ensureShadowTaskState && yG._renderShadowMap && kG && !yG._preloadPending) {
              ZG.add(yG);
              const SG = yG._shadowTaskState ?? null,
                LG = yG._ensureShadowTaskState(GG, bG, kG);
              if (LG !== SG || LG._recordedVersion !== bG._renderableVersion) {
                const GG = bG._renderableVersion;
                LG._task.record(), LG._recordedVersion = GG
              }
              wG += yG._renderShadowMap(GG, LG)
            }
          }
          return wG
        },
        dispose() {
          wG._passes.length = 0;
          for (const GG of ZG) {
            const bG = GG._shadowTaskState;
            bG && (bG._task.dispose(), GG._shadowTaskState = void 0)
          }
          ZG.clear()
        }
      };
      return wG
    }
    async function yG(GG, bG) {
      GG._preloadPending = bG, await (GG._preloadShadowTask?.(bG)), GG._preloadPending === bG && (GG._preloadPending = void 0)
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);