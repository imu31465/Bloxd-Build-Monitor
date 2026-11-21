export const id = 15;
export const ids = [15];
export const modules = {
  39529: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      default: () => Nd
    });
    const pd = [
        [25, 8, 56],
        [25, 8, 54]
      ],
      Nd = function(dd, Jd, kd) {
        let Nd;
        return {
          onCreate: dd => {
            Nd = dd
          },
          onPlayerAltAction: (dd, Jd, kd, Wd, Pd, Zd) => {
            pd.some((dd => dd[0] === Jd && dd[2] === Wd)) && Nd.openShop(dd, !1)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);