export const id = 13;
export const ids = [13];
export const modules = {
  39413: (dd, Jd, kd) => {
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
          Pd && "Mesh" === pd.getEntityType(Pd) && "Quartermaster" === pd.getEntityName(Pd) && pd.openShop(dd, !1, "Armoury")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);