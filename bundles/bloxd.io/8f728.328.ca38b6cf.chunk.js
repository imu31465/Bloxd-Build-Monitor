export const id = 328;
export const ids = [328];
export const modules = {
  41222: (cB, Bc, nc) => {
    nc.d(Bc, {
      gamePackSource: () => rB
    });
    var Vc = nc(4031),
      Ic = nc(1314);

    function rB(cB) {
      return {
        packKey: async Bc => (await Ic.e.getGame(cB, Bc, !0)).customTexturePackKey,
        fetchPack: Vc.b
      }
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);