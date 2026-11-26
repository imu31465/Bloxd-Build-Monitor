export const id = 664;
export const ids = [664];
export const modules = {
  64021: (UU, XU, zU) => {
    function cU(UU, XU, zU, cU, yU, QU, AU) {
      const FU = XU,
        oU = cU,
        DU = zU;
      UU[DU + 0] = FU[oU + 0], UU[DU + 1] = FU[oU + 1], UU[DU + 2] = FU[oU + 2], UU[DU + 3] = FU[oU + 3], UU[DU + 4] = FU[oU + 4], UU[DU + 5] = FU[oU + 5], UU[DU + 6] = FU[oU + 6], UU[DU + 7] = FU[oU + 7], UU[DU + 8] = FU[oU + 8], UU[DU + 9] = FU[oU + 9], UU[DU + 10] = FU[oU + 10], UU[DU + 11] = FU[oU + 11], UU[DU + 12] = FU[oU + 12] - yU, UU[DU + 13] = FU[oU + 13] - QU, UU[DU + 14] = FU[oU + 14] - AU, UU[DU + 15] = FU[oU + 15]
    }

    function yU(UU) {
      return (XU, zU, yU, QU) => {
        const AU = UU.camera;
        if (!AU) return void cU(XU, zU, yU, QU, 0, 0, 0);
        const FU = AU.worldMatrix;
        cU(XU, zU, yU, QU, FU[12], FU[13], FU[14])
      }
    }
    zU.r(XU), zU.d(XU, {
      makePackMeshWorld: () => yU,
      packMat4IntoF32WithOffset: () => cU
    })
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);