export const id = 20;
export const ids = [20];
export const modules = {
  38912: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      default: () => Sv
    });
    var hv = Pv(26);
    const Sv = function(vv, zv, Pv) {
      let Sv;
      return {
        onCreate: vv => {
          Sv = vv
        },
        onPlayerClick: (vv, zv, Pv, ev, gv, pv) => {
          zv || "Workbench" !== Sv.getMetaInfo(pv).rootName || hv.j.zC("toggleMenu", "inventory|Workbench")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);