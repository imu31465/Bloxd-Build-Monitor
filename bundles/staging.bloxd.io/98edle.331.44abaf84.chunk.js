export const id = 331;
export const ids = [331];
export const modules = {
  58681: (WW, RW, MW) => {
    function wW(WW, RW, MW, wW, CW, zR, AW) {
      const bR = RW,
        yR = wW,
        NW = MW;
      WW[NW + 0] = bR[yR + 0], WW[NW + 1] = bR[yR + 1], WW[NW + 2] = bR[yR + 2], WW[NW + 3] = bR[yR + 3], WW[NW + 4] = bR[yR + 4], WW[NW + 5] = bR[yR + 5], WW[NW + 6] = bR[yR + 6], WW[NW + 7] = bR[yR + 7], WW[NW + 8] = bR[yR + 8], WW[NW + 9] = bR[yR + 9], WW[NW + 10] = bR[yR + 10], WW[NW + 11] = bR[yR + 11], WW[NW + 12] = bR[yR + 12] - CW, WW[NW + 13] = bR[yR + 13] - zR, WW[NW + 14] = bR[yR + 14] - AW, WW[NW + 15] = bR[yR + 15]
    }

    function CW(WW) {
      return (RW, MW, CW, zR) => {
        const AW = WW.camera;
        if (!AW) return void wW(RW, MW, CW, zR, 0, 0, 0);
        const bR = AW.worldMatrix;
        wW(RW, MW, CW, zR, bR[12], bR[13], bR[14])
      }
    }
    MW.r(RW), MW.d(RW, {
      makePackMeshWorld: () => CW,
      packMat4IntoF32WithOffset: () => wW
    })
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);