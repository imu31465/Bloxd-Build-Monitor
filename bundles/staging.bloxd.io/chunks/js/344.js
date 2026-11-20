export const id = 344;
export const ids = [344];
export const modules = {
  42804: (TT, kT, cT) => {
    cT.d(kT, {
      gamePackSource: () => KT
    });
    var lT = cT(4939),
      MT = cT(1518);

    function KT(TT) {
      return {
        packKey: async kT => (await MT.d.getGame(TT, kT, !0)).customTexturePackKey,
        fetchPack: lT.b
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);