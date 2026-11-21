export const id = 10;
export const ids = [10];
export const modules = {
  39398: (dd, Jd, kd) => {
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
          Pd && "Mesh" === pd.getEntityType(Pd) && ("Permanent Upgrades" === pd.getEntityName(Pd) ? pd.openShop(dd, !1, "Upgrades") : "Items" === pd.getEntityName(Pd) ? pd.openShop(dd, !1, "Items") : "Prestige" === pd.getEntityName(Pd) && pd.openShop(dd, !1, "Prestige"))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);