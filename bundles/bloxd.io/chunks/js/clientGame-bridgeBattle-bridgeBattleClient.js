export const id = 10;
export const ids = [10];
export const modules = {
  38577: (DD, CD, cD) => {
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
          fD && "Mesh" === ID.getEntityType(fD) && ("Permanent Upgrades" === ID.getEntityName(fD) ? ID.openShop(DD, !1, "Upgrades") : "Items" === ID.getEntityName(fD) ? ID.openShop(DD, !1, "Items") : "Prestige" === ID.getEntityName(fD) && ID.openShop(DD, !1, "Prestige"))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);