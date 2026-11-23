export const id = 271;
export const ids = [271];
export const modules = {
  40888: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      gamePackSource: () => bC
    });
    var QC = ZC(4925),
      wC = ZC(1439);

    function bC(CC) {
      return {
        packKey: async zC => (await wC.d.getGame(CC, zC, !0)).customTexturePackKey,
        fetchPack: QC.d
      }
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);