export const id = 23;
export const ids = [23];
export const modules = {
  39356: (CC, zC, ZC) => {
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
          null !== nC && "Mesh" === QC.getEntityType(nC) && "Weaponmaster" === QC.getEntityName(nC) && QC.openShop(CC, !1, "PvpCivWeapon")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);