export const id = 363;
export const ids = [363];
export const modules = {
  61516: (BB, jB, zB) => {
    function QB(BB, jB, zB, QB, nB, dB, IB) {
      const NB = jB,
        uB = QB,
        UB = zB;
      BB[UB + 0] = NB[uB + 0], BB[UB + 1] = NB[uB + 1], BB[UB + 2] = NB[uB + 2], BB[UB + 3] = NB[uB + 3], BB[UB + 4] = NB[uB + 4], BB[UB + 5] = NB[uB + 5], BB[UB + 6] = NB[uB + 6], BB[UB + 7] = NB[uB + 7], BB[UB + 8] = NB[uB + 8], BB[UB + 9] = NB[uB + 9], BB[UB + 10] = NB[uB + 10], BB[UB + 11] = NB[uB + 11], BB[UB + 12] = NB[uB + 12] - nB, BB[UB + 13] = NB[uB + 13] - dB, BB[UB + 14] = NB[uB + 14] - IB, BB[UB + 15] = NB[uB + 15]
    }

    function nB(BB) {
      return (jB, zB, nB, dB) => {
        const IB = BB.camera;
        if (!IB) return void QB(jB, zB, nB, dB, 0, 0, 0);
        const NB = IB.worldMatrix;
        QB(jB, zB, nB, dB, NB[12], NB[13], NB[14])
      }
    }
    zB.r(jB), zB.d(jB, {
      makePackMeshWorld: () => nB,
      packMat4IntoF32WithOffset: () => QB
    })
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);