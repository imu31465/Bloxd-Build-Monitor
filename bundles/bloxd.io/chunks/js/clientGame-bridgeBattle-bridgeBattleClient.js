export const id = 10;
export const ids = [10];
export const modules = {
  40121: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      default: () => ye
    });
    const ye = function(ee, ie, He) {
      let ye;
      return {
        onCreate: ee => {
          ye = ee
        },
        onPlayerAltAction: (ee, ie, He, be, Me, Ke) => {
          Ke && "Mesh" === ye.getEntityType(Ke) && ("Permanent Upgrades" === ye.getEntityName(Ke) ? ye.openShop(ee, !1, "Upgrades") : "Items" === ye.getEntityName(Ke) ? ye.openShop(ee, !1, "Items") : "Prestige" === ye.getEntityName(Ke) && ye.openShop(ee, !1, "Prestige"))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);