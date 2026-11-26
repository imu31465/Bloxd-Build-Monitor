export const id = 299;
export const ids = [299];
export const modules = {
  42371: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      gamePackSource: () => UV
    });
    var JV = xV(5486),
      YV = xV(1603);

    function UV(VV) {
      return {
        packKey: async eV => (await YV.b.getGame(VV, eV, !0)).customTexturePackKey,
        fetchPack: JV.d
      }
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);