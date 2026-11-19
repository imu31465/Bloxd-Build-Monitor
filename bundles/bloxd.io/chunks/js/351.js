export const id = 351;
export const ids = [351];
export const modules = {
  60293: (YY, rY, DY) => {
    function FY(YY, rY, DY, FY, AY, IY, RY) {
      const OY = rY,
        gY = FY,
        aY = DY;
      YY[aY + 0] = OY[gY + 0], YY[aY + 1] = OY[gY + 1], YY[aY + 2] = OY[gY + 2], YY[aY + 3] = OY[gY + 3], YY[aY + 4] = OY[gY + 4], YY[aY + 5] = OY[gY + 5], YY[aY + 6] = OY[gY + 6], YY[aY + 7] = OY[gY + 7], YY[aY + 8] = OY[gY + 8], YY[aY + 9] = OY[gY + 9], YY[aY + 10] = OY[gY + 10], YY[aY + 11] = OY[gY + 11], YY[aY + 12] = OY[gY + 12] - AY, YY[aY + 13] = OY[gY + 13] - IY, YY[aY + 14] = OY[gY + 14] - RY, YY[aY + 15] = OY[gY + 15]
    }

    function AY(YY) {
      return (rY, DY, AY, IY) => {
        const RY = YY.camera;
        if (!RY) return void FY(rY, DY, AY, IY, 0, 0, 0);
        const OY = RY.worldMatrix;
        FY(rY, DY, AY, IY, OY[12], OY[13], OY[14])
      }
    }
    DY.r(rY), DY.d(rY, {
      makePackMeshWorld: () => AY,
      packMat4IntoF32WithOffset: () => FY
    })
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);