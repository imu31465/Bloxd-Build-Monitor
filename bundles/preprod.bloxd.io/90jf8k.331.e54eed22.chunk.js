export const id = 331;
export const ids = [331];
export const modules = {
  58992: (FF, WF, SF) => {
    function CF(FF, WF, SF, CF, AF, uF, hF) {
      const bW = WF,
        dF = CF,
        PF = SF;
      FF[PF + 0] = bW[dF + 0], FF[PF + 1] = bW[dF + 1], FF[PF + 2] = bW[dF + 2], FF[PF + 3] = bW[dF + 3], FF[PF + 4] = bW[dF + 4], FF[PF + 5] = bW[dF + 5], FF[PF + 6] = bW[dF + 6], FF[PF + 7] = bW[dF + 7], FF[PF + 8] = bW[dF + 8], FF[PF + 9] = bW[dF + 9], FF[PF + 10] = bW[dF + 10], FF[PF + 11] = bW[dF + 11], FF[PF + 12] = bW[dF + 12] - AF, FF[PF + 13] = bW[dF + 13] - uF, FF[PF + 14] = bW[dF + 14] - hF, FF[PF + 15] = bW[dF + 15]
    }

    function AF(FF) {
      return (WF, SF, AF, uF) => {
        const hF = FF.camera;
        if (!hF) return void CF(WF, SF, AF, uF, 0, 0, 0);
        const bW = hF.worldMatrix;
        CF(WF, SF, AF, uF, bW[12], bW[13], bW[14])
      }
    }
    SF.r(WF), SF.d(WF, {
      makePackMeshWorld: () => AF,
      packMat4IntoF32WithOffset: () => CF
    })
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);