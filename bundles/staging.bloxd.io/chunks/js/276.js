export const id = 276;
export const ids = [276];
export const modules = {
  41082: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      gamePackSource: () => oB
    });
    var TB = ZB(5134),
      JB = ZB(1561);

    function oB(BB) {
      return {
        packKey: async IB => (await JB.c.getGame(BB, IB, !0)).customTexturePackKey,
        fetchPack: TB.c
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);