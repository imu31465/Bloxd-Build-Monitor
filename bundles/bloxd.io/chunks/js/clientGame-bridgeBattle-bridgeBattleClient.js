export const id = 10;
export const ids = [10];
export const modules = {
  38764: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      default: () => hv
    });
    const hv = function(vv, zv, Pv) {
      let hv;
      return {
        onCreate: vv => {
          hv = vv
        },
        onPlayerAltAction: (vv, zv, Pv, Sv, ev, gv) => {
          gv && "Mesh" === hv.getEntityType(gv) && ("Permanent Upgrades" === hv.getEntityName(gv) ? hv.openShop(vv, !1, "Upgrades") : "Items" === hv.getEntityName(gv) ? hv.openShop(vv, !1, "Items") : "Prestige" === hv.getEntityName(gv) && hv.openShop(vv, !1, "Prestige"))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);