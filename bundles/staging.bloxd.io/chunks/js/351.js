export const id = 351;
export const ids = [351];
export const modules = {
  60490: (DD, CD, cD) => {
    function ID(DD, CD, cD, ID, pD, iD, fD) {
      const bD = CD,
        QD = ID,
        wD = cD;
      DD[wD + 0] = bD[QD + 0], DD[wD + 1] = bD[QD + 1], DD[wD + 2] = bD[QD + 2], DD[wD + 3] = bD[QD + 3], DD[wD + 4] = bD[QD + 4], DD[wD + 5] = bD[QD + 5], DD[wD + 6] = bD[QD + 6], DD[wD + 7] = bD[QD + 7], DD[wD + 8] = bD[QD + 8], DD[wD + 9] = bD[QD + 9], DD[wD + 10] = bD[QD + 10], DD[wD + 11] = bD[QD + 11], DD[wD + 12] = bD[QD + 12] - pD, DD[wD + 13] = bD[QD + 13] - iD, DD[wD + 14] = bD[QD + 14] - fD, DD[wD + 15] = bD[QD + 15]
    }

    function pD(DD) {
      return (CD, cD, pD, iD) => {
        const fD = DD.camera;
        if (!fD) return void ID(CD, cD, pD, iD, 0, 0, 0);
        const bD = fD.worldMatrix;
        ID(CD, cD, pD, iD, bD[12], bD[13], bD[14])
      }
    }
    cD.r(CD), cD.d(CD, {
      makePackMeshWorld: () => pD,
      packMat4IntoF32WithOffset: () => ID
    })
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);