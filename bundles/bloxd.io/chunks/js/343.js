export const id = 343;
export const ids = [343];
export const modules = {
  42416: (bb, ab, Ub) => {
    Ub.d(ab, {
      gamePackSource: () => Tb
    });
    var Ab = Ub(4659),
      Mb = Ub(1413);

    function Tb(bb) {
      return {
        packKey: async ab => (await Mb.b.getGame(bb, ab, !0)).customTexturePackKey,
        fetchPack: Ab.e
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);