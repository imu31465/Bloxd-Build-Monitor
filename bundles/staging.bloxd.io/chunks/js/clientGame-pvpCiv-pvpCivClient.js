export const id = 23;
export const ids = [23];
export const modules = {
  39650: (dd, Jd, kd) => {
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
          null !== Pd && "Mesh" === pd.getEntityType(Pd) && "Weaponmaster" === pd.getEntityName(Pd) && pd.openShop(dd, !1, "PvpCivWeapon")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);