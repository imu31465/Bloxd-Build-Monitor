export const id = 24;
export const ids = [24];
export const modules = {
  39002: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      default: () => hv
    });
    const hv = function() {
      let vv;
      return {
        onCreate: zv => {
          vv = zv
        },
        onPlayerAltAction: (zv, Pv, hv, Sv, ev, gv) => {
          if (!gv || "Mesh" !== vv.getEntityType(gv)) return;
          const pv = vv.getEntityName(gv);
          "Perks" === pv ? vv.openShop(zv, !1, "Perks") : "Returning Bonus" === pv && vv.openShop(zv, !1, "Returning Player Bonus")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);