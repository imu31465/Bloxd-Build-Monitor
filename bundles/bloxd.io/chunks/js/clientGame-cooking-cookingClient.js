export const id = 15;
export const ids = [15];
export const modules = {
  38877: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      default: () => Sv
    });
    const hv = [
        [25, 8, 56],
        [25, 8, 54]
      ],
      Sv = function(vv, zv, Pv) {
        let Sv;
        return {
          onCreate: vv => {
            Sv = vv
          },
          onPlayerAltAction: (vv, zv, Pv, ev, gv, pv) => {
            hv.some((vv => vv[0] === zv && vv[2] === ev)) && Sv.openShop(vv, !1)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);