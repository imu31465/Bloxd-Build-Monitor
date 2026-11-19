export const id = 343;
export const ids = [343];
export const modules = {
  42472: (DD, CD, cD) => {
    cD.d(CD, {
      gamePackSource: () => iD
    });
    var ID = cD(4762),
      pD = cD(1497);

    function iD(DD) {
      return {
        packKey: async CD => (await pD.c.getGame(DD, CD, !0)).customTexturePackKey,
        fetchPack: ID.c
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);