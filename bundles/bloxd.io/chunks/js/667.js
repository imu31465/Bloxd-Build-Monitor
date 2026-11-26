export const id = 667;
export const ids = [667];
export const modules = {
  63966: (BB, OB, GB) => {
    function YB(BB, OB, GB, YB, DB, QB, oB) {
      const jB = OB,
        yB = YB,
        JB = GB;
      BB[JB + 0] = jB[yB + 0], BB[JB + 1] = jB[yB + 1], BB[JB + 2] = jB[yB + 2], BB[JB + 3] = jB[yB + 3], BB[JB + 4] = jB[yB + 4], BB[JB + 5] = jB[yB + 5], BB[JB + 6] = jB[yB + 6], BB[JB + 7] = jB[yB + 7], BB[JB + 8] = jB[yB + 8], BB[JB + 9] = jB[yB + 9], BB[JB + 10] = jB[yB + 10], BB[JB + 11] = jB[yB + 11], BB[JB + 12] = jB[yB + 12] - DB, BB[JB + 13] = jB[yB + 13] - QB, BB[JB + 14] = jB[yB + 14] - oB, BB[JB + 15] = jB[yB + 15]
    }

    function DB(BB) {
      return (OB, GB, DB, QB) => {
        const oB = BB.camera;
        if (!oB) return void YB(OB, GB, DB, QB, 0, 0, 0);
        const jB = oB.worldMatrix;
        YB(OB, GB, DB, QB, jB[12], jB[13], jB[14])
      }
    }
    GB.r(OB), GB.d(OB, {
      makePackMeshWorld: () => DB,
      packMat4IntoF32WithOffset: () => YB
    })
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);