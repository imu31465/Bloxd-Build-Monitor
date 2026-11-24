export const id = 359;
export const ids = [359];
export const modules = {
  61411: (SS, HS, gS) => {
    function tS(SS, HS, gS, tS, bS, XS, xS) {
      const NS = HS,
        qS = tS,
        uS = gS;
      SS[uS + 0] = NS[qS + 0], SS[uS + 1] = NS[qS + 1], SS[uS + 2] = NS[qS + 2], SS[uS + 3] = NS[qS + 3], SS[uS + 4] = NS[qS + 4], SS[uS + 5] = NS[qS + 5], SS[uS + 6] = NS[qS + 6], SS[uS + 7] = NS[qS + 7], SS[uS + 8] = NS[qS + 8], SS[uS + 9] = NS[qS + 9], SS[uS + 10] = NS[qS + 10], SS[uS + 11] = NS[qS + 11], SS[uS + 12] = NS[qS + 12] - bS, SS[uS + 13] = NS[qS + 13] - XS, SS[uS + 14] = NS[qS + 14] - xS, SS[uS + 15] = NS[qS + 15]
    }

    function bS(SS) {
      return (HS, gS, bS, XS) => {
        const xS = SS.camera;
        if (!xS) return void tS(HS, gS, bS, XS, 0, 0, 0);
        const NS = xS.worldMatrix;
        tS(HS, gS, bS, XS, NS[12], NS[13], NS[14])
      }
    }
    gS.r(HS), gS.d(HS, {
      makePackMeshWorld: () => bS,
      packMat4IntoF32WithOffset: () => tS
    })
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);