export const id = 351;
export const ids = [351];
export const modules = {
  60625: (UU, RU, gU) => {
    function tU(UU, RU, gU, tU, pU, EU, PU) {
      const TU = RU,
        qU = tU,
        KU = gU;
      UU[KU + 0] = TU[qU + 0], UU[KU + 1] = TU[qU + 1], UU[KU + 2] = TU[qU + 2], UU[KU + 3] = TU[qU + 3], UU[KU + 4] = TU[qU + 4], UU[KU + 5] = TU[qU + 5], UU[KU + 6] = TU[qU + 6], UU[KU + 7] = TU[qU + 7], UU[KU + 8] = TU[qU + 8], UU[KU + 9] = TU[qU + 9], UU[KU + 10] = TU[qU + 10], UU[KU + 11] = TU[qU + 11], UU[KU + 12] = TU[qU + 12] - pU, UU[KU + 13] = TU[qU + 13] - EU, UU[KU + 14] = TU[qU + 14] - PU, UU[KU + 15] = TU[qU + 15]
    }

    function pU(UU) {
      return (RU, gU, pU, EU) => {
        const PU = UU.camera;
        if (!PU) return void tU(RU, gU, pU, EU, 0, 0, 0);
        const TU = PU.worldMatrix;
        tU(RU, gU, pU, EU, TU[12], TU[13], TU[14])
      }
    }
    gU.r(RU), gU.d(RU, {
      makePackMeshWorld: () => pU,
      packMat4IntoF32WithOffset: () => tU
    })
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);