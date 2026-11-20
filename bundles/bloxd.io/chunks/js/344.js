export const id = 344;
export const ids = [344];
export const modules = {
  42704: (vv, zv, Pv) => {
    Pv.d(zv, {
      gamePackSource: () => ev
    });
    var hv = Pv(4719),
      Sv = Pv(1482);

    function ev(vv) {
      return {
        packKey: async zv => (await Sv.e.getGame(vv, zv, !0)).customTexturePackKey,
        fetchPack: hv.d
      }
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);