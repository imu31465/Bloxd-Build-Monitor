export const id = 23;
export const ids = [23];
export const modules = {
  39492: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      default: () => pD
    });
    const pD = function(DD, zD, wD) {
      let pD;
      return {
        onCreate: DD => {
          pD = DD
        },
        onPlayerAltAction: (DD, zD, wD, sD, KD, rD) => {
          null !== rD && "Mesh" === pD.getEntityType(rD) && "Weaponmaster" === pD.getEntityName(rD) && pD.openShop(DD, !1, "PvpCivWeapon")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);