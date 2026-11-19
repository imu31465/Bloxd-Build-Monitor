export const id = 343;
export const ids = [343];
export const modules = {
  42118: (TT, oT, IT) => {
    IT.d(oT, {
      gamePackSource: () => kT
    });
    var iT = IT(4465),
      zT = IT(1451);

    function kT(TT) {
      return {
        packKey: async oT => (await zT.e.getGame(TT, oT, !0)).customTexturePackKey,
        fetchPack: iT.c
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);