export const id = 363;
export const ids = [363];
export const modules = {
  61229: (TT, UT, mT) => {
    function WT(TT, UT, mT, WT, zT, MT, gT) {
      const nT = UT,
        HT = WT,
        kT = mT;
      TT[kT + 0] = nT[HT + 0], TT[kT + 1] = nT[HT + 1], TT[kT + 2] = nT[HT + 2], TT[kT + 3] = nT[HT + 3], TT[kT + 4] = nT[HT + 4], TT[kT + 5] = nT[HT + 5], TT[kT + 6] = nT[HT + 6], TT[kT + 7] = nT[HT + 7], TT[kT + 8] = nT[HT + 8], TT[kT + 9] = nT[HT + 9], TT[kT + 10] = nT[HT + 10], TT[kT + 11] = nT[HT + 11], TT[kT + 12] = nT[HT + 12] - zT, TT[kT + 13] = nT[HT + 13] - MT, TT[kT + 14] = nT[HT + 14] - gT, TT[kT + 15] = nT[HT + 15]
    }

    function zT(TT) {
      return (UT, mT, zT, MT) => {
        const gT = TT.camera;
        if (!gT) return void WT(UT, mT, zT, MT, 0, 0, 0);
        const nT = gT.worldMatrix;
        WT(UT, mT, zT, MT, nT[12], nT[13], nT[14])
      }
    }
    mT.r(UT), mT.d(UT, {
      makePackMeshWorld: () => zT,
      packMat4IntoF32WithOffset: () => WT
    })
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);