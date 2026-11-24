export const id = 271;
export const ids = [271];
export const modules = {
  41120: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      gamePackSource: () => am
    });
    var hm = fm(4938),
      Am = fm(1494);

    function am(mm) {
      return {
        packKey: async Tm => (await Am.d.getGame(mm, Tm, !0)).customTexturePackKey,
        fetchPack: hm.e
      }
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);