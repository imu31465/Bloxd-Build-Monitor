export const id = 344;
export const ids = [344];
export const modules = {
  43063: (qq, Eq, gq) => {
    gq.d(Eq, {
      gamePackSource: () => Oq
    });
    var Yq = gq(4821),
      lq = gq(1477);

    function Oq(qq) {
      return {
        packKey: async Eq => (await lq.e.getGame(qq, Eq, !0)).customTexturePackKey,
        fetchPack: Yq.e
      }
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);