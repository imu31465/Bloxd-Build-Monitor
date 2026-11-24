export const id = 271;
export const ids = [271];
export const modules = {
  41075: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      gamePackSource: () => XS
    });
    var tS = gS(5133),
      bS = gS(1588);

    function XS(SS) {
      return {
        packKey: async HS => (await bS.b.getGame(SS, HS, !0)).customTexturePackKey,
        fetchPack: tS.e
      }
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);