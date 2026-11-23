export const id = 10;
export const ids = [10];
export const modules = {
  39114: (CC, zC, ZC) => {
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
          nC && "Mesh" === QC.getEntityType(nC) && ("Permanent Upgrades" === QC.getEntityName(nC) ? QC.openShop(CC, !1, "Upgrades") : "Items" === QC.getEntityName(nC) ? QC.openShop(CC, !1, "Items") : "Prestige" === QC.getEntityName(nC) && QC.openShop(CC, !1, "Prestige"))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);