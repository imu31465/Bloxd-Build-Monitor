export const id = 10;
export const ids = [10];
export const modules = {
  39244: (DD, zD, wD) => {
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
          rD && "Mesh" === pD.getEntityType(rD) && ("Permanent Upgrades" === pD.getEntityName(rD) ? pD.openShop(DD, !1, "Upgrades") : "Items" === pD.getEntityName(rD) ? pD.openShop(DD, !1, "Items") : "Prestige" === pD.getEntityName(rD) && pD.openShop(DD, !1, "Prestige"))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);