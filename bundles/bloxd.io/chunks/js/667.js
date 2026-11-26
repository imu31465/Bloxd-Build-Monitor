export const id = 667;
export const ids = [667];
export const modules = {
  64383: (VV, eV, xV) => {
    function JV(VV, eV, xV, JV, YV, UV, yV) {
      const pV = eV,
        QV = JV,
        nV = xV;
      VV[nV + 0] = pV[QV + 0], VV[nV + 1] = pV[QV + 1], VV[nV + 2] = pV[QV + 2], VV[nV + 3] = pV[QV + 3], VV[nV + 4] = pV[QV + 4], VV[nV + 5] = pV[QV + 5], VV[nV + 6] = pV[QV + 6], VV[nV + 7] = pV[QV + 7], VV[nV + 8] = pV[QV + 8], VV[nV + 9] = pV[QV + 9], VV[nV + 10] = pV[QV + 10], VV[nV + 11] = pV[QV + 11], VV[nV + 12] = pV[QV + 12] - YV, VV[nV + 13] = pV[QV + 13] - UV, VV[nV + 14] = pV[QV + 14] - yV, VV[nV + 15] = pV[QV + 15]
    }

    function YV(VV) {
      return (eV, xV, YV, UV) => {
        const yV = VV.camera;
        if (!yV) return void JV(eV, xV, YV, UV, 0, 0, 0);
        const pV = yV.worldMatrix;
        JV(eV, xV, YV, UV, pV[12], pV[13], pV[14])
      }
    }
    xV.r(eV), xV.d(eV, {
      makePackMeshWorld: () => YV,
      packMat4IntoF32WithOffset: () => JV
    })
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);