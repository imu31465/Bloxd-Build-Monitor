export const id = 16;
export const ids = [16];
export const modules = {
  39531: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      default: () => pd
    });
    const pd = function(dd, Jd, kd) {
      let pd;
      return {
        onCreate: dd => {
          pd = dd
        },
        onPlayerAltAction: (dd, Jd, kd, Nd, Wd, Pd) => {
          Pd && "Mesh" === pd.getEntityType(Pd) && pd.openShop(dd, !0)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);