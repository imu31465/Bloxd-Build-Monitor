export const id = 344;
export const ids = [344];
export const modules = {
  43223: (dd, Jd, kd) => {
    kd.d(Jd, {
      gamePackSource: () => Wd
    });
    var pd = kd(4867),
      Nd = kd(1520);

    function Wd(dd) {
      return {
        packKey: async Jd => (await Nd.d.getGame(dd, Jd, !0)).customTexturePackKey,
        fetchPack: pd.d
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);