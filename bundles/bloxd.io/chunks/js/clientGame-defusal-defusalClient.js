export const id = 16;
export const ids = [16];
export const modules = {
  38884: (vv, zv, Pv) => {
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
          gv && "Mesh" === hv.getEntityType(gv) && hv.openShop(vv, !0)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);