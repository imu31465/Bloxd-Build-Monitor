export const id = 363;
export const ids = [363];
export const modules = {
  61398: (BB, IB, ZB) => {
    function TB(BB, IB, ZB, TB, JB, oB, GB) {
      const vB = IB,
        kB = TB,
        cB = ZB;
      BB[cB + 0] = vB[kB + 0], BB[cB + 1] = vB[kB + 1], BB[cB + 2] = vB[kB + 2], BB[cB + 3] = vB[kB + 3], BB[cB + 4] = vB[kB + 4], BB[cB + 5] = vB[kB + 5], BB[cB + 6] = vB[kB + 6], BB[cB + 7] = vB[kB + 7], BB[cB + 8] = vB[kB + 8], BB[cB + 9] = vB[kB + 9], BB[cB + 10] = vB[kB + 10], BB[cB + 11] = vB[kB + 11], BB[cB + 12] = vB[kB + 12] - JB, BB[cB + 13] = vB[kB + 13] - oB, BB[cB + 14] = vB[kB + 14] - GB, BB[cB + 15] = vB[kB + 15]
    }

    function JB(BB) {
      return (IB, ZB, JB, oB) => {
        const GB = BB.camera;
        if (!GB) return void TB(IB, ZB, JB, oB, 0, 0, 0);
        const vB = GB.worldMatrix;
        TB(IB, ZB, JB, oB, vB[12], vB[13], vB[14])
      }
    }
    ZB.r(IB), ZB.d(IB, {
      makePackMeshWorld: () => JB,
      packMat4IntoF32WithOffset: () => TB
    })
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);