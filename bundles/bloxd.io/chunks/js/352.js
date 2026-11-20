export const id = 352;
export const ids = [352];
export const modules = {
  60644: (TT, kT, cT) => {
    function lT(TT, kT, cT, lT, MT, KT, OT) {
      const yT = kT,
        fT = lT,
        xT = cT;
      TT[xT + 0] = yT[fT + 0], TT[xT + 1] = yT[fT + 1], TT[xT + 2] = yT[fT + 2], TT[xT + 3] = yT[fT + 3], TT[xT + 4] = yT[fT + 4], TT[xT + 5] = yT[fT + 5], TT[xT + 6] = yT[fT + 6], TT[xT + 7] = yT[fT + 7], TT[xT + 8] = yT[fT + 8], TT[xT + 9] = yT[fT + 9], TT[xT + 10] = yT[fT + 10], TT[xT + 11] = yT[fT + 11], TT[xT + 12] = yT[fT + 12] - MT, TT[xT + 13] = yT[fT + 13] - KT, TT[xT + 14] = yT[fT + 14] - OT, TT[xT + 15] = yT[fT + 15]
    }

    function MT(TT) {
      return (kT, cT, MT, KT) => {
        const OT = TT.camera;
        if (!OT) return void lT(kT, cT, MT, KT, 0, 0, 0);
        const yT = OT.worldMatrix;
        lT(kT, cT, MT, KT, yT[12], yT[13], yT[14])
      }
    }
    cT.r(kT), cT.d(kT, {
      makePackMeshWorld: () => MT,
      packMat4IntoF32WithOffset: () => lT
    })
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);