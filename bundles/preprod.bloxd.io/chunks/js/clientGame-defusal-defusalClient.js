export const id = 16;
export const ids = [16];
export const modules = {
  39252: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      default: () => QC
    });
    const QC = function(CC, zC, ZC) {
      let QC;
      return {
        onCreate: CC => {
          QC = CC
        },
        onPlayerAltAction: (CC, zC, ZC, wC, bC, nC) => {
          nC && "Mesh" === QC.getEntityType(nC) && QC.openShop(CC, !0)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);