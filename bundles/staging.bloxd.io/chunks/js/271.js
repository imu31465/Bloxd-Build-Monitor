export const id = 271;
export const ids = [271];
export const modules = {
  40972: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      gamePackSource: () => KD
    });
    var pD = wD(5011),
      sD = wD(1495);

    function KD(DD) {
      return {
        packKey: async zD => (await sD.d.getGame(DD, zD, !0)).customTexturePackKey,
        fetchPack: pD.c
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);