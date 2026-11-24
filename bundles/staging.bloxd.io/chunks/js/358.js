export const id = 358;
export const ids = [358];
export const modules = {
  61405: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      applyLightFoOffset: () => xS,
      getFloatingOriginOffset: () => bS,
      lightFoVersion: () => XS,
      wrapRenderableForFO: () => NS
    });
    var tS = gS(41745);

    function bS(SS) {
      const HS = SS.camera;
      if (!HS) return {
        x: 0,
        y: 0,
        z: 0
      };
      const gS = HS.worldMatrix;
      return {
        x: gS[12],
        y: gS[13],
        z: gS[14]
      }
    }

    function XS(SS) {
      return SS.camera ? SS.camera.worldMatrixVersion : 0
    }

    function xS(SS, HS) {
      const gS = HS.camera?.worldMatrix;
      if (!gS) return;
      const bS = gS[12],
        XS = gS[13],
        xS = gS[14];
      let NS = 0;
      for (const qS of HS.lights) {
        if (NS >= tS.c) break;
        if (!qS._writeLightUbo) continue;
        const HS = 4 + 16 * NS,
          gS = SS[HS + 3];
        if (0 === gS || 2 === gS) {
          const gS = qS.worldMatrix;
          SS[HS] = gS[12] - bS, SS[HS + 1] = gS[13] - XS, SS[HS + 2] = gS[14] - xS
        }
        NS++
      }
    }

    function NS(SS, HS, gS) {
      let tS = -1;
      return () => {
        const bS = HS.camera ? HS.camera.worldMatrixVersion : -1;
        bS !== tS && (gS(), tS = bS), SS()
      }
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);