export const id = 667;
export const ids = [667];
export const modules = {
  64188: (HH, BH, LH) => {
    function AH(HH, BH, LH, AH, rH, SH, hH) {
      const tH = BH,
        zH = AH,
        CH = LH;
      HH[CH + 0] = tH[zH + 0], HH[CH + 1] = tH[zH + 1], HH[CH + 2] = tH[zH + 2], HH[CH + 3] = tH[zH + 3], HH[CH + 4] = tH[zH + 4], HH[CH + 5] = tH[zH + 5], HH[CH + 6] = tH[zH + 6], HH[CH + 7] = tH[zH + 7], HH[CH + 8] = tH[zH + 8], HH[CH + 9] = tH[zH + 9], HH[CH + 10] = tH[zH + 10], HH[CH + 11] = tH[zH + 11], HH[CH + 12] = tH[zH + 12] - rH, HH[CH + 13] = tH[zH + 13] - SH, HH[CH + 14] = tH[zH + 14] - hH, HH[CH + 15] = tH[zH + 15]
    }

    function rH(HH) {
      return (BH, LH, rH, SH) => {
        const hH = HH.camera;
        if (!hH) return void AH(BH, LH, rH, SH, 0, 0, 0);
        const tH = hH.worldMatrix;
        AH(BH, LH, rH, SH, tH[12], tH[13], tH[14])
      }
    }
    LH.r(BH), LH.d(BH, {
      makePackMeshWorld: () => rH,
      packMat4IntoF32WithOffset: () => AH
    })
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);