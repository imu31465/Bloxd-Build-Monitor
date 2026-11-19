export const id = 343;
export const ids = [343];
export const modules = {
  42364: (YY, rY, DY) => {
    DY.d(rY, {
      gamePackSource: () => IY
    });
    var FY = DY(4569),
      AY = DY(1471);

    function IY(YY) {
      return {
        packKey: async rY => (await AY.e.getGame(YY, rY, !0)).customTexturePackKey,
        fetchPack: FY.d
      }
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);