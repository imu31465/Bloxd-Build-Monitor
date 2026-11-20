export const id = 343;
export const ids = [343];
export const modules = {
  42641: (UU, RU, gU) => {
    gU.d(RU, {
      gamePackSource: () => EU
    });
    var tU = gU(4657),
      pU = gU(1461);

    function EU(UU) {
      return {
        packKey: async RU => (await pU.c.getGame(UU, RU, !0)).customTexturePackKey,
        fetchPack: tU.c
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);