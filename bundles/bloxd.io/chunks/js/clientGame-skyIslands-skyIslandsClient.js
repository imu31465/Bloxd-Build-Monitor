export const id = 24;
export const ids = [24];
export const modules = {
  39659: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      default: () => pd
    });
    const pd = function() {
      let dd;
      return {
        onCreate: Jd => {
          dd = Jd
        },
        onPlayerAltAction: (Jd, kd, pd, Nd, Wd, Pd) => {
          if (!Pd || "Mesh" !== dd.getEntityType(Pd)) return;
          const Zd = dd.getEntityName(Pd);
          "Perks" === Zd ? dd.openShop(Jd, !1, "Perks") : "Returning Bonus" === Zd && dd.openShop(Jd, !1, "Returning Player Bonus")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);