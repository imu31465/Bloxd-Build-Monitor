export const id = 14;
export const ids = [14];
export const modules = {
  40131: (ee, ie, He) => {
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
          Ke && "Mesh" === ye.getEntityType(Ke) && "Quartermaster" === ye.getEntityName(Ke) && ye.openShop(ee, !1, "Armoury")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);