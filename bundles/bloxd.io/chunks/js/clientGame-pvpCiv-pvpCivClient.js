export const id = 23;
export const ids = [23];
export const modules = {
  38832: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      default: () => ID
    });
    const ID = function(DD, CD, cD) {
      let ID;
      return {
        onCreate: DD => {
          ID = DD
        },
        onPlayerAltAction: (DD, CD, cD, pD, iD, fD) => {
          null !== fD && "Mesh" === ID.getEntityType(fD) && "Weaponmaster" === ID.getEntityName(fD) && ID.openShop(DD, !1, "PvpCivWeapon")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);