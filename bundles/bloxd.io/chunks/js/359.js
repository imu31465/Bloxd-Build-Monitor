export const id = 359;
export const ids = [359];
export const modules = {
  61116: (DD, zD, wD) => {
    function pD(DD, zD, wD, pD, sD, KD, rD) {
      const LD = zD,
        cD = pD,
        gD = wD;
      DD[gD + 0] = LD[cD + 0], DD[gD + 1] = LD[cD + 1], DD[gD + 2] = LD[cD + 2], DD[gD + 3] = LD[cD + 3], DD[gD + 4] = LD[cD + 4], DD[gD + 5] = LD[cD + 5], DD[gD + 6] = LD[cD + 6], DD[gD + 7] = LD[cD + 7], DD[gD + 8] = LD[cD + 8], DD[gD + 9] = LD[cD + 9], DD[gD + 10] = LD[cD + 10], DD[gD + 11] = LD[cD + 11], DD[gD + 12] = LD[cD + 12] - sD, DD[gD + 13] = LD[cD + 13] - KD, DD[gD + 14] = LD[cD + 14] - rD, DD[gD + 15] = LD[cD + 15]
    }

    function sD(DD) {
      return (zD, wD, sD, KD) => {
        const rD = DD.camera;
        if (!rD) return void pD(zD, wD, sD, KD, 0, 0, 0);
        const LD = rD.worldMatrix;
        pD(zD, wD, sD, KD, LD[12], LD[13], LD[14])
      }
    }
    wD.r(zD), wD.d(zD, {
      makePackMeshWorld: () => sD,
      packMat4IntoF32WithOffset: () => pD
    })
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);