export const id = 331;
export const ids = [331];
export const modules = {
  41833: (yb, bb, Wy) => {
    Wy.d(bb, {
      gamePackSource: () => fy
    });
    var Uy = Wy(4191),
      hy = Wy(1339);

    function fy(yb) {
      return {
        packKey: async bb => (await hy.c.getGame(yb, bb, !0)).customTexturePackKey,
        fetchPack: Uy.c
      }
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);