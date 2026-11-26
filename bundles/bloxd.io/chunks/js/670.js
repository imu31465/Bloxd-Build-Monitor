export const id = 670;
export const ids = [670];
export const modules = {
  64208: (HH, BH, LH) => {
    LH.d(BH, {
      createShadowTask: () => SH
    });
    var AH = null;

    function rH(HH) {
      return AH?.get(HH)
    }

    function SH(HH, BH) {
      const LH = new Set;
      0;
      const AH = {
        name: "lX",
        engine: HH,
        NQ: BH,
        _passes: [],
        async _preload() {
          const HH = [];
          for (const LH of BH.lights) {
            const BH = LH.shadowGenerator,
              AH = BH ? rH(BH) : null;
            BH?._preloadShadowTask && AH && HH.push(hH(BH, AH))
          }
          await Promise.all(HH)
        },
        record() {
          AH._passes.length = 0;
          for (const AH of BH.lights) {
            const SH = AH.shadowGenerator,
              hH = SH ? rH(SH) : null;
            if (SH?._ensureShadowTaskState && hH && !SH._preloadPending) {
              LH.add(SH);
              const AH = SH._ensureShadowTaskState(HH, BH, hH),
                rH = BH._renderableVersion;
              AH._task.record(), AH._recordedVersion = rH
            }
          }
        },
        execute() {
          let AH = 0;
          for (const SH of BH.lights) {
            const hH = SH.shadowGenerator,
              tH = hH ? rH(hH) : null;
            if (hH?._ensureShadowTaskState && hH._renderShadowMap && tH && !hH._preloadPending) {
              LH.add(hH);
              const rH = hH._shadowTaskState ?? null,
                SH = hH._ensureShadowTaskState(HH, BH, tH);
              if (SH !== rH || SH._recordedVersion !== BH._renderableVersion) {
                const HH = BH._renderableVersion;
                SH._task.record(), SH._recordedVersion = HH
              }
              AH += hH._renderShadowMap(HH, SH)
            }
          }
          return AH
        },
        dispose() {
          AH._passes.length = 0;
          for (const HH of LH) {
            const BH = HH._shadowTaskState;
            BH && (BH._task.dispose(), HH._shadowTaskState = void 0)
          }
          LH.clear()
        }
      };
      return AH
    }
    async function hH(HH, BH) {
      HH._preloadPending = BH, await (HH._preloadShadowTask?.(BH)), HH._preloadPending === BH && (HH._preloadPending = void 0)
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);