export const id = 24;
export const ids = [24];
export const modules = {
  40338: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      default: () => yU
    });
    var cU = zU(31);
    const yU = function(UU, XU, zU) {
      let yU;
      return {
        onCreate: UU => {
          yU = UU
        },
        onPlayerClick: (UU, XU, zU, QU, AU, FU) => {
          XU || "Workbench" !== yU.getMetaInfo(FU).rootName || cU.k.UY("toggleMenu", "inventory|Workbench")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);