export const id = 363;
export const ids = [363];
export const modules = {
  61902: (GG, bG, ZG) => {
    function wG(GG, bG, ZG, wG, SG, LG, yG) {
      const kG = bG,
        UG = wG,
        YG = ZG;
      GG[YG + 0] = kG[UG + 0], GG[YG + 1] = kG[UG + 1], GG[YG + 2] = kG[UG + 2], GG[YG + 3] = kG[UG + 3], GG[YG + 4] = kG[UG + 4], GG[YG + 5] = kG[UG + 5], GG[YG + 6] = kG[UG + 6], GG[YG + 7] = kG[UG + 7], GG[YG + 8] = kG[UG + 8], GG[YG + 9] = kG[UG + 9], GG[YG + 10] = kG[UG + 10], GG[YG + 11] = kG[UG + 11], GG[YG + 12] = kG[UG + 12] - SG, GG[YG + 13] = kG[UG + 13] - LG, GG[YG + 14] = kG[UG + 14] - yG, GG[YG + 15] = kG[UG + 15]
    }

    function SG(GG) {
      return (bG, ZG, SG, LG) => {
        const yG = GG.camera;
        if (!yG) return void wG(bG, ZG, SG, LG, 0, 0, 0);
        const kG = yG.worldMatrix;
        wG(bG, ZG, SG, LG, kG[12], kG[13], kG[14])
      }
    }
    ZG.r(bG), ZG.d(bG, {
      makePackMeshWorld: () => SG,
      packMat4IntoF32WithOffset: () => wG
    })
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);