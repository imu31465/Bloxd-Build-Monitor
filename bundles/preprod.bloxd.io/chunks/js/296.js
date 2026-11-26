export const id = 296;
export const ids = [296];
export const modules = {
  42154: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      gamePackSource: () => QU
    });
    var cU = zU(5527),
      yU = zU(1545);

    function QU(UU) {
      return {
        packKey: async XU => (await yU.c.getGame(UU, XU, !0)).customTexturePackKey,
        fetchPack: cU.c
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);