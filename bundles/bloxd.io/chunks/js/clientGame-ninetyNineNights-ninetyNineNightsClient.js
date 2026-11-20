export const id = 20;
export const ids = [20];
export const modules = {
  38975: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      default: () => pU
    });
    var tU = gU(24);
    const pU = function(UU, RU, gU) {
      let pU;
      return {
        onCreate: UU => {
          pU = UU
        },
        onPlayerClick: (UU, RU, gU, EU, PU, TU) => {
          RU || "Workbench" !== pU.getMetaInfo(TU).rootName || tU.p.yh("toggleMenu", "inventory|Workbench")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);