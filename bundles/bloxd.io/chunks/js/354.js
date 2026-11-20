export const id = 354;
export const ids = [354];
export const modules = {
  60637: (UU, RU, gU) => {
    gU.d(RU, {
      createShadowTask: () => EU
    });
    var tU = null;

    function pU(UU) {
      return tU?.get(UU)
    }

    function EU(UU, RU) {
      const gU = new Set;
      0;
      const tU = {
        name: "iu",
        engine: UU,
        Zh: RU,
        _passes: [],
        async _preload() {
          const UU = [];
          for (const gU of RU.lights) {
            const RU = gU.shadowGenerator,
              tU = RU ? pU(RU) : null;
            RU?._preloadShadowTask && tU && UU.push(PU(RU, tU))
          }
          await Promise.all(UU)
        },
        record() {
          tU._passes.length = 0;
          for (const tU of RU.lights) {
            const EU = tU.shadowGenerator,
              PU = EU ? pU(EU) : null;
            if (EU?._ensureShadowTaskState && PU && !EU._preloadPending) {
              gU.add(EU);
              const tU = EU._ensureShadowTaskState(UU, RU, PU),
                pU = RU._renderableVersion;
              tU._task.record(), tU._recordedVersion = pU
            }
          }
        },
        execute() {
          let tU = 0;
          for (const EU of RU.lights) {
            const PU = EU.shadowGenerator,
              TU = PU ? pU(PU) : null;
            if (PU?._ensureShadowTaskState && PU._renderShadowMap && TU && !PU._preloadPending) {
              gU.add(PU);
              const pU = PU._shadowTaskState ?? null,
                EU = PU._ensureShadowTaskState(UU, RU, TU);
              if (EU !== pU || EU._recordedVersion !== RU._renderableVersion) {
                const UU = RU._renderableVersion;
                EU._task.record(), EU._recordedVersion = UU
              }
              tU += PU._renderShadowMap(UU, EU)
            }
          }
          return tU
        },
        dispose() {
          tU._passes.length = 0;
          for (const UU of gU) {
            const RU = UU._shadowTaskState;
            RU && (RU._task.dispose(), UU._shadowTaskState = void 0)
          }
          gU.clear()
        }
      };
      return tU
    }
    async function PU(UU, RU) {
      UU._preloadPending = RU, await (UU._preloadShadowTask?.(RU)), UU._preloadPending === RU && (UU._preloadPending = void 0)
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);