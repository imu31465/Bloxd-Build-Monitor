export const id = 27;
export const ids = [27];
export const modules = {
  40420: (ee, ie, He) => {
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
          null !== Ke && "Mesh" === ye.getEntityType(Ke) && "Weaponmaster" === ye.getEntityName(Ke) && ye.openShop(ee, !1, "PvpCivWeapon")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);