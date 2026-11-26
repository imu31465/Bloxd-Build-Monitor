export const id = 670;
export const ids = [670];
export const modules = {
  64394: (VV, eV, xV) => {
    xV.d(eV, {
      createShadowTask: () => UV
    });
    var JV = null;

    function YV(VV) {
      return JV?.get(VV)
    }

    function UV(VV, eV) {
      const xV = new Set;
      0;
      const JV = {
        name: "aZ",
        engine: VV,
        yE: eV,
        _passes: [],
        async _preload() {
          const VV = [];
          for (const xV of eV.lights) {
            const eV = xV.shadowGenerator,
              JV = eV ? YV(eV) : null;
            eV?._preloadShadowTask && JV && VV.push(yV(eV, JV))
          }
          await Promise.all(VV)
        },
        record() {
          JV._passes.length = 0;
          for (const JV of eV.lights) {
            const UV = JV.shadowGenerator,
              yV = UV ? YV(UV) : null;
            if (UV?._ensureShadowTaskState && yV && !UV._preloadPending) {
              xV.add(UV);
              const JV = UV._ensureShadowTaskState(VV, eV, yV),
                YV = eV._renderableVersion;
              JV._task.record(), JV._recordedVersion = YV
            }
          }
        },
        execute() {
          let JV = 0;
          for (const UV of eV.lights) {
            const yV = UV.shadowGenerator,
              pV = yV ? YV(yV) : null;
            if (yV?._ensureShadowTaskState && yV._renderShadowMap && pV && !yV._preloadPending) {
              xV.add(yV);
              const YV = yV._shadowTaskState ?? null,
                UV = yV._ensureShadowTaskState(VV, eV, pV);
              if (UV !== YV || UV._recordedVersion !== eV._renderableVersion) {
                const VV = eV._renderableVersion;
                UV._task.record(), UV._recordedVersion = VV
              }
              JV += yV._renderShadowMap(VV, UV)
            }
          }
          return JV
        },
        dispose() {
          JV._passes.length = 0;
          for (const VV of xV) {
            const eV = VV._shadowTaskState;
            eV && (eV._task.dispose(), VV._shadowTaskState = void 0)
          }
          xV.clear()
        }
      };
      return JV
    }
    async function yV(VV, eV) {
      VV._preloadPending = eV, await (VV._preloadShadowTask?.(eV)), VV._preloadPending === eV && (VV._preloadPending = void 0)
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);