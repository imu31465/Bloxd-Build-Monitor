export const id = 362;
export const ids = [362];
export const modules = {
  61425: (SS, HS, gS) => {
    gS.d(HS, {
      createShadowTask: () => XS
    });
    var tS = null;

    function bS(SS) {
      return tS?.get(SS)
    }

    function XS(SS, HS) {
      const gS = new Set;
      0;
      const tS = {
        name: "XK",
        engine: SS,
        Bj: HS,
        _passes: [],
        async _preload() {
          const SS = [];
          for (const gS of HS.lights) {
            const HS = gS.shadowGenerator,
              tS = HS ? bS(HS) : null;
            HS?._preloadShadowTask && tS && SS.push(xS(HS, tS))
          }
          await Promise.all(SS)
        },
        record() {
          tS._passes.length = 0;
          for (const tS of HS.lights) {
            const XS = tS.shadowGenerator,
              xS = XS ? bS(XS) : null;
            if (XS?._ensureShadowTaskState && xS && !XS._preloadPending) {
              gS.add(XS);
              const tS = XS._ensureShadowTaskState(SS, HS, xS),
                bS = HS._renderableVersion;
              tS._task.record(), tS._recordedVersion = bS
            }
          }
        },
        execute() {
          let tS = 0;
          for (const XS of HS.lights) {
            const xS = XS.shadowGenerator,
              NS = xS ? bS(xS) : null;
            if (xS?._ensureShadowTaskState && xS._renderShadowMap && NS && !xS._preloadPending) {
              gS.add(xS);
              const bS = xS._shadowTaskState ?? null,
                XS = xS._ensureShadowTaskState(SS, HS, NS);
              if (XS !== bS || XS._recordedVersion !== HS._renderableVersion) {
                const SS = HS._renderableVersion;
                XS._task.record(), XS._recordedVersion = SS
              }
              tS += xS._renderShadowMap(SS, XS)
            }
          }
          return tS
        },
        dispose() {
          tS._passes.length = 0;
          for (const SS of gS) {
            const HS = SS._shadowTaskState;
            HS && (HS._task.dispose(), SS._shadowTaskState = void 0)
          }
          gS.clear()
        }
      };
      return tS
    }
    async function xS(SS, HS) {
      SS._preloadPending = HS, await (SS._preloadShadowTask?.(HS)), SS._preloadPending === HS && (SS._preloadPending = void 0)
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);