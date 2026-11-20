export const id = 13;
export const ids = [13];
export const modules = {
  38770: (vv, zv, Pv) => {
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
          gv && "Mesh" === hv.getEntityType(gv) && "Quartermaster" === hv.getEntityName(gv) && hv.openShop(vv, !1, "Armoury")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);