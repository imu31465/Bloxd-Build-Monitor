export const id = 23;
export const ids = [23];
export const modules = {
  39651: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      default: () => WT
    });
    const WT = function(TT, UT, mT) {
      let WT;
      return {
        onCreate: TT => {
          WT = TT
        },
        onPlayerAltAction: (TT, UT, mT, zT, MT, gT) => {
          null !== gT && "Mesh" === WT.getEntityType(gT) && "Weaponmaster" === WT.getEntityName(gT) && WT.openShop(TT, !1, "PvpCivWeapon")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);