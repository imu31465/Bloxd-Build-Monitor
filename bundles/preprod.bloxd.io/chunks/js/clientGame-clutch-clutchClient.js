export const id = 13;
export const ids = [13];
export const modules = {
  39122: (CC, zC, ZC) => {
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
          nC && "Mesh" === QC.getEntityType(nC) && "Quartermaster" === QC.getEntityName(nC) && QC.openShop(CC, !1, "Armoury")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);