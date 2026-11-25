export const id = 670;
export const ids = [670];
export const modules = {
  64013: (MM, rM, iM) => {
    iM.d(rM, {
      createShadowTask: () => jM
    });
    var OM = null;

    function SM(MM) {
      return OM?.get(MM)
    }

    function jM(MM, rM) {
      const iM = new Set;
      0;
      const OM = {
        name: "tL",
        engine: MM,
        YJ: rM,
        _passes: [],
        async _preload() {
          const MM = [];
          for (const iM of rM.lights) {
            const rM = iM.shadowGenerator,
              OM = rM ? SM(rM) : null;
            rM?._preloadShadowTask && OM && MM.push(aM(rM, OM))
          }
          await Promise.all(MM)
        },
        record() {
          OM._passes.length = 0;
          for (const OM of rM.lights) {
            const jM = OM.shadowGenerator,
              aM = jM ? SM(jM) : null;
            if (jM?._ensureShadowTaskState && aM && !jM._preloadPending) {
              iM.add(jM);
              const OM = jM._ensureShadowTaskState(MM, rM, aM),
                SM = rM._renderableVersion;
              OM._task.record(), OM._recordedVersion = SM
            }
          }
        },
        execute() {
          let OM = 0;
          for (const jM of rM.lights) {
            const aM = jM.shadowGenerator,
              PM = aM ? SM(aM) : null;
            if (aM?._ensureShadowTaskState && aM._renderShadowMap && PM && !aM._preloadPending) {
              iM.add(aM);
              const SM = aM._shadowTaskState ?? null,
                jM = aM._ensureShadowTaskState(MM, rM, PM);
              if (jM !== SM || jM._recordedVersion !== rM._renderableVersion) {
                const MM = rM._renderableVersion;
                jM._task.record(), jM._recordedVersion = MM
              }
              OM += aM._renderShadowMap(MM, jM)
            }
          }
          return OM
        },
        dispose() {
          OM._passes.length = 0;
          for (const MM of iM) {
            const rM = MM._shadowTaskState;
            rM && (rM._task.dispose(), MM._shadowTaskState = void 0)
          }
          iM.clear()
        }
      };
      return OM
    }
    async function aM(MM, rM) {
      MM._preloadPending = rM, await (MM._preloadShadowTask?.(rM)), MM._preloadPending === rM && (MM._preloadPending = void 0)
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);