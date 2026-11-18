export const id = 341;
export const ids = [341];
export const modules = {
  59490: (JJ, cJ, ZJ) => {
    function FJ(JJ, cJ, ZJ, FJ, UJ, eJ, XJ) {
      const AJ = cJ,
        qJ = FJ,
        jJ = ZJ;
      JJ[jJ + 0] = AJ[qJ + 0], JJ[jJ + 1] = AJ[qJ + 1], JJ[jJ + 2] = AJ[qJ + 2], JJ[jJ + 3] = AJ[qJ + 3], JJ[jJ + 4] = AJ[qJ + 4], JJ[jJ + 5] = AJ[qJ + 5], JJ[jJ + 6] = AJ[qJ + 6], JJ[jJ + 7] = AJ[qJ + 7], JJ[jJ + 8] = AJ[qJ + 8], JJ[jJ + 9] = AJ[qJ + 9], JJ[jJ + 10] = AJ[qJ + 10], JJ[jJ + 11] = AJ[qJ + 11], JJ[jJ + 12] = AJ[qJ + 12] - UJ, JJ[jJ + 13] = AJ[qJ + 13] - eJ, JJ[jJ + 14] = AJ[qJ + 14] - XJ, JJ[jJ + 15] = AJ[qJ + 15]
    }

    function UJ(JJ) {
      return (cJ, ZJ, UJ, eJ) => {
        const XJ = JJ.camera;
        if (!XJ) return void FJ(cJ, ZJ, UJ, eJ, 0, 0, 0);
        const AJ = XJ.worldMatrix;
        FJ(cJ, ZJ, UJ, eJ, AJ[12], AJ[13], AJ[14])
      }
    }
    ZJ.r(cJ), ZJ.d(cJ, {
      makePackMeshWorld: () => UJ,
      packMat4IntoF32WithOffset: () => FJ
    })
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);