export const id = 10;
export const ids = [10];
export const modules = {
  40364: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      default: () => OM
    });
    const OM = function(MM, rM, iM) {
      let OM;
      return {
        onCreate: MM => {
          OM = MM
        },
        onPlayerAltAction: (MM, rM, iM, SM, jM, aM) => {
          aM && "Mesh" === OM.getEntityType(aM) && ("Permanent Upgrades" === OM.getEntityName(aM) ? OM.openShop(MM, !1, "Upgrades") : "Items" === OM.getEntityName(aM) ? OM.openShop(MM, !1, "Items") : "Prestige" === OM.getEntityName(aM) && OM.openShop(MM, !1, "Prestige"))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);