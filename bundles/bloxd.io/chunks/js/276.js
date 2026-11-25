export const id = 276;
export const ids = [276];
export const modules = {
  41447: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      gamePackSource: () => LG
    });
    var wG = ZG(5008),
      SG = ZG(1431);

    function LG(GG) {
      return {
        packKey: async bG => (await SG.d.getGame(GG, bG, !0)).customTexturePackKey,
        fetchPack: wG.e
      }
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);