export const id = 341;
export const ids = [341];
export const modules = {
  59798: (BB, TB, dB) => {
    function VB(BB, TB, dB, VB, yB, pB, lB) {
      const JB = TB,
        YB = VB,
        gB = dB;
      BB[gB + 0] = JB[YB + 0], BB[gB + 1] = JB[YB + 1], BB[gB + 2] = JB[YB + 2], BB[gB + 3] = JB[YB + 3], BB[gB + 4] = JB[YB + 4], BB[gB + 5] = JB[YB + 5], BB[gB + 6] = JB[YB + 6], BB[gB + 7] = JB[YB + 7], BB[gB + 8] = JB[YB + 8], BB[gB + 9] = JB[YB + 9], BB[gB + 10] = JB[YB + 10], BB[gB + 11] = JB[YB + 11], BB[gB + 12] = JB[YB + 12] - yB, BB[gB + 13] = JB[YB + 13] - pB, BB[gB + 14] = JB[YB + 14] - lB, BB[gB + 15] = JB[YB + 15]
    }

    function yB(BB) {
      return (TB, dB, yB, pB) => {
        const lB = BB.camera;
        if (!lB) return void VB(TB, dB, yB, pB, 0, 0, 0);
        const JB = lB.worldMatrix;
        VB(TB, dB, yB, pB, JB[12], JB[13], JB[14])
      }
    }
    dB.r(TB), dB.d(TB, {
      makePackMeshWorld: () => yB,
      packMat4IntoF32WithOffset: () => VB
    })
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);