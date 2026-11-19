export const id = 354;
export const ids = [354];
export const modules = {
  60505: (DD, CD, cD) => {
    cD.d(CD, {
      createShadowTask: () => iD
    });
    var ID = null;

    function pD(DD) {
      return ID?.get(DD)
    }

    function iD(DD, CD) {
      const cD = new Set;
      0;
      const ID = {
        name: "Xt",
        engine: DD,
        wo: CD,
        _passes: [],
        async _preload() {
          const DD = [];
          for (const cD of CD.lights) {
            const CD = cD.shadowGenerator,
              ID = CD ? pD(CD) : null;
            CD?._preloadShadowTask && ID && DD.push(fD(CD, ID))
          }
          await Promise.all(DD)
        },
        record() {
          ID._passes.length = 0;
          for (const ID of CD.lights) {
            const iD = ID.shadowGenerator,
              fD = iD ? pD(iD) : null;
            if (iD?._ensureShadowTaskState && fD && !iD._preloadPending) {
              cD.add(iD);
              const ID = iD._ensureShadowTaskState(DD, CD, fD),
                pD = CD._renderableVersion;
              ID._task.record(), ID._recordedVersion = pD
            }
          }
        },
        execute() {
          let ID = 0;
          for (const iD of CD.lights) {
            const fD = iD.shadowGenerator,
              bD = fD ? pD(fD) : null;
            if (fD?._ensureShadowTaskState && fD._renderShadowMap && bD && !fD._preloadPending) {
              cD.add(fD);
              const pD = fD._shadowTaskState ?? null,
                iD = fD._ensureShadowTaskState(DD, CD, bD);
              if (iD !== pD || iD._recordedVersion !== CD._renderableVersion) {
                const DD = CD._renderableVersion;
                iD._task.record(), iD._recordedVersion = DD
              }
              ID += fD._renderShadowMap(DD, iD)
            }
          }
          return ID
        },
        dispose() {
          ID._passes.length = 0;
          for (const DD of cD) {
            const CD = DD._shadowTaskState;
            CD && (CD._task.dispose(), DD._shadowTaskState = void 0)
          }
          cD.clear()
        }
      };
      return ID
    }
    async function fD(DD, CD) {
      DD._preloadPending = CD, await (DD._preloadShadowTask?.(CD)), DD._preloadPending === CD && (DD._preloadPending = void 0)
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);