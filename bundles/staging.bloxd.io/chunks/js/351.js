export const id = 351;
export const ids = [351];
export const modules = {
  60098: (TT, oT, IT) => {
    function iT(TT, oT, IT, iT, zT, kT, WT) {
      const XT = oT,
        BT = iT,
        FT = IT;
      TT[FT + 0] = XT[BT + 0], TT[FT + 1] = XT[BT + 1], TT[FT + 2] = XT[BT + 2], TT[FT + 3] = XT[BT + 3], TT[FT + 4] = XT[BT + 4], TT[FT + 5] = XT[BT + 5], TT[FT + 6] = XT[BT + 6], TT[FT + 7] = XT[BT + 7], TT[FT + 8] = XT[BT + 8], TT[FT + 9] = XT[BT + 9], TT[FT + 10] = XT[BT + 10], TT[FT + 11] = XT[BT + 11], TT[FT + 12] = XT[BT + 12] - zT, TT[FT + 13] = XT[BT + 13] - kT, TT[FT + 14] = XT[BT + 14] - WT, TT[FT + 15] = XT[BT + 15]
    }

    function zT(TT) {
      return (oT, IT, zT, kT) => {
        const WT = TT.camera;
        if (!WT) return void iT(oT, IT, zT, kT, 0, 0, 0);
        const XT = WT.worldMatrix;
        iT(oT, IT, zT, kT, XT[12], XT[13], XT[14])
      }
    }
    IT.r(oT), IT.d(oT, {
      makePackMeshWorld: () => zT,
      packMat4IntoF32WithOffset: () => iT
    })
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);