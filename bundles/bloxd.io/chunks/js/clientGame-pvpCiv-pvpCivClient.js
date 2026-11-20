export const id = 23;
export const ids = [23];
export const modules = {
  38994: (vv, zv, Pv) => {
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
          null !== gv && "Mesh" === hv.getEntityType(gv) && "Weaponmaster" === hv.getEntityName(gv) && hv.openShop(vv, !1, "PvpCivWeapon")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);