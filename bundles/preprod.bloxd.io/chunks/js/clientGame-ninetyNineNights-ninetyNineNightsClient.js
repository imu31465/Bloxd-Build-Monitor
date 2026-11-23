export const id = 20;
export const ids = [20];
export const modules = {
  39275: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      default: () => wC
    });
    var QC = ZC(28);
    const wC = function(CC, zC, ZC) {
      let wC;
      return {
        onCreate: CC => {
          wC = CC
        },
        onPlayerClick: (CC, zC, ZC, bC, nC, fC) => {
          zC || "Workbench" !== wC.getMetaInfo(fC).rootName || QC.o.bp("toggleMenu", "inventory|Workbench")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);