export const id = 359;
export const ids = [359];
export const modules = {
  61019: (CC, zC, ZC) => {
    function QC(CC, zC, ZC, QC, wC, bC, nC) {
      const fC = zC,
        oC = QC,
        qC = ZC;
      CC[qC + 0] = fC[oC + 0], CC[qC + 1] = fC[oC + 1], CC[qC + 2] = fC[oC + 2], CC[qC + 3] = fC[oC + 3], CC[qC + 4] = fC[oC + 4], CC[qC + 5] = fC[oC + 5], CC[qC + 6] = fC[oC + 6], CC[qC + 7] = fC[oC + 7], CC[qC + 8] = fC[oC + 8], CC[qC + 9] = fC[oC + 9], CC[qC + 10] = fC[oC + 10], CC[qC + 11] = fC[oC + 11], CC[qC + 12] = fC[oC + 12] - wC, CC[qC + 13] = fC[oC + 13] - bC, CC[qC + 14] = fC[oC + 14] - nC, CC[qC + 15] = fC[oC + 15]
    }

    function wC(CC) {
      return (zC, ZC, wC, bC) => {
        const nC = CC.camera;
        if (!nC) return void QC(zC, ZC, wC, bC, 0, 0, 0);
        const fC = nC.worldMatrix;
        QC(zC, ZC, wC, bC, fC[12], fC[13], fC[14])
      }
    }
    ZC.r(zC), ZC.d(zC, {
      makePackMeshWorld: () => wC,
      packMat4IntoF32WithOffset: () => QC
    })
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);