export const id = 667;
export const ids = [667];
export const modules = {
  63990: (MM, rM, iM) => {
    function OM(MM, rM, iM, OM, SM, jM, aM) {
      const PM = rM,
        nM = OM,
        QM = iM;
      MM[QM + 0] = PM[nM + 0], MM[QM + 1] = PM[nM + 1], MM[QM + 2] = PM[nM + 2], MM[QM + 3] = PM[nM + 3], MM[QM + 4] = PM[nM + 4], MM[QM + 5] = PM[nM + 5], MM[QM + 6] = PM[nM + 6], MM[QM + 7] = PM[nM + 7], MM[QM + 8] = PM[nM + 8], MM[QM + 9] = PM[nM + 9], MM[QM + 10] = PM[nM + 10], MM[QM + 11] = PM[nM + 11], MM[QM + 12] = PM[nM + 12] - SM, MM[QM + 13] = PM[nM + 13] - jM, MM[QM + 14] = PM[nM + 14] - aM, MM[QM + 15] = PM[nM + 15]
    }

    function SM(MM) {
      return (rM, iM, SM, jM) => {
        const aM = MM.camera;
        if (!aM) return void OM(rM, iM, SM, jM, 0, 0, 0);
        const PM = aM.worldMatrix;
        OM(rM, iM, SM, jM, PM[12], PM[13], PM[14])
      }
    }
    iM.r(rM), iM.d(rM, {
      makePackMeshWorld: () => SM,
      packMat4IntoF32WithOffset: () => OM
    })
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);