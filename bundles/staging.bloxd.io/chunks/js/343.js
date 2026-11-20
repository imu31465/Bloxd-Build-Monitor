export const id = 343;
export const ids = [343];
export const modules = {
  42885: (uu, Ru, yu) => {
    yu.d(Ru, {
      gamePackSource: () => Qu
    });
    var Eu = yu(4771),
      Ku = yu(1447);

    function Qu(uu) {
      return {
        packKey: async Ru => (await Ku.e.getGame(uu, Ru, !0)).customTexturePackKey,
        fetchPack: Eu.d
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);