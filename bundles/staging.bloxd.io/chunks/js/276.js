export const id = 276;
export const ids = [276];
export const modules = {
  41276: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      gamePackSource: () => Zu
    });
    var su = ju(5146),
      Uu = ju(1559);

    function Zu(uu) {
      return {
        packKey: async Eu => (await Uu.b.getGame(uu, Eu, !0)).customTexturePackKey,
        fetchPack: su.c
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);