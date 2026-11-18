export const id = 333;
export const ids = [333];
export const modules = {
  41982: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      gamePackSource: () => eJ
    });
    var FJ = ZJ(4392),
      UJ = ZJ(1389);

    function eJ(JJ) {
      return {
        packKey: async cJ => (await UJ.c.getGame(JJ, cJ, !0)).customTexturePackKey,
        fetchPack: FJ.d
      }
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);