export const id = 666;
export const ids = [666];
export const modules = {
  64380: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      applyLightFoOffset: () => yV,
      getFloatingOriginOffset: () => YV,
      lightFoVersion: () => UV,
      wrapRenderableForFO: () => pV
    });
    var JV = xV(44627);

    function YV(VV) {
      const eV = VV.camera;
      if (!eV) return {
        x: 0,
        y: 0,
        z: 0
      };
      const xV = eV.worldMatrix;
      return {
        x: xV[12],
        y: xV[13],
        z: xV[14]
      }
    }

    function UV(VV) {
      return VV.camera ? VV.camera.worldMatrixVersion : 0
    }

    function yV(VV, eV) {
      const xV = eV.camera?.worldMatrix;
      if (!xV) return;
      const YV = xV[12],
        UV = xV[13],
        yV = xV[14];
      let pV = 0;
      for (const QV of eV.lights) {
        if (pV >= JV.b) break;
        if (!QV._writeLightUbo) continue;
        const eV = 4 + 16 * pV,
          xV = VV[eV + 3];
        if (0 === xV || 2 === xV) {
          const xV = QV.worldMatrix;
          VV[eV] = xV[12] - YV, VV[eV + 1] = xV[13] - UV, VV[eV + 2] = xV[14] - yV
        }
        pV++
      }
    }

    function pV(VV, eV, xV) {
      let JV = -1;
      return () => {
        const YV = eV.camera ? eV.camera.worldMatrixVersion : -1;
        YV !== JV && (xV(), JV = YV), VV()
      }
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);