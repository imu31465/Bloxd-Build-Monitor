export const id = 19;
export const ids = [19];
export const modules = {
  37745: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      default: () => Ic
    });
    var Vc = nc(35);
    const Ic = function(cB, Bc, nc) {
      let Ic;
      return {
        onCreate: cB => {
          Ic = cB
        },
        onPlayerClick: (cB, Bc, nc, rB, uc, sc) => {
          Bc || "Workbench" !== Ic.getMetaInfo(sc).rootName || Vc.i.Vu("toggleMenu", "inventory|Workbench")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);