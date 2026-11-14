export const id = 323;
export const ids = [323];
export const modules = {
  40760: (WW, RW, MW) => {
    MW.d(RW, {
      gamePackSource: () => zR
    });
    var wW = MW(3955),
      CW = MW(1314);

    function zR(WW) {
      return {
        packKey: async RW => (await CW.c.getGame(WW, RW, !0)).customTexturePackKey,
        fetchPack: wW.b
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);