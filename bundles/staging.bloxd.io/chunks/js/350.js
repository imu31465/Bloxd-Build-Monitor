export const id = 350;
export const ids = [350];
export const modules = {
  60619: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      applyLightFoOffset: () => PU,
      getFloatingOriginOffset: () => pU,
      lightFoVersion: () => EU,
      wrapRenderableForFO: () => TU
    });
    var tU = gU(41092);

    function pU(UU) {
      const RU = UU.camera;
      if (!RU) return {
        x: 0,
        y: 0,
        z: 0
      };
      const gU = RU.worldMatrix;
      return {
        x: gU[12],
        y: gU[13],
        z: gU[14]
      }
    }

    function EU(UU) {
      return UU.camera ? UU.camera.worldMatrixVersion : 0
    }

    function PU(UU, RU) {
      const gU = RU.camera?.worldMatrix;
      if (!gU) return;
      const pU = gU[12],
        EU = gU[13],
        PU = gU[14];
      let TU = 0;
      for (const qU of RU.lights) {
        if (TU >= tU.b) break;
        if (!qU._writeLightUbo) continue;
        const RU = 4 + 16 * TU,
          gU = UU[RU + 3];
        if (0 === gU || 2 === gU) {
          const gU = qU.worldMatrix;
          UU[RU] = gU[12] - pU, UU[RU + 1] = gU[13] - EU, UU[RU + 2] = gU[14] - PU
        }
        TU++
      }
    }

    function TU(UU, RU, gU) {
      let tU = -1;
      return () => {
        const pU = RU.camera ? RU.camera.worldMatrixVersion : -1;
        pU !== tU && (gU(), tU = pU), UU()
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);