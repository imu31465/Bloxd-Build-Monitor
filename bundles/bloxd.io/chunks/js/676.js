export const id = 676;
export const ids = [676];
export const modules = {
  64482: (WW, iW, OW) => {
    function mW(WW, iW, OW, mW, EW, NW, PW) {
      const LW = iW,
        cW = mW,
        wW = OW;
      WW[wW + 0] = LW[cW + 0], WW[wW + 1] = LW[cW + 1], WW[wW + 2] = LW[cW + 2], WW[wW + 3] = LW[cW + 3], WW[wW + 4] = LW[cW + 4], WW[wW + 5] = LW[cW + 5], WW[wW + 6] = LW[cW + 6], WW[wW + 7] = LW[cW + 7], WW[wW + 8] = LW[cW + 8], WW[wW + 9] = LW[cW + 9], WW[wW + 10] = LW[cW + 10], WW[wW + 11] = LW[cW + 11], WW[wW + 12] = LW[cW + 12] - EW, WW[wW + 13] = LW[cW + 13] - NW, WW[wW + 14] = LW[cW + 14] - PW, WW[wW + 15] = LW[cW + 15]
    }

    function EW(WW) {
      return (iW, OW, EW, NW) => {
        const PW = WW.camera;
        if (!PW) return void mW(iW, OW, EW, NW, 0, 0, 0);
        const LW = PW.worldMatrix;
        mW(iW, OW, EW, NW, LW[12], LW[13], LW[14])
      }
    }
    OW.r(iW), OW.d(iW, {
      makePackMeshWorld: () => EW,
      packMat4IntoF32WithOffset: () => mW
    })
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);