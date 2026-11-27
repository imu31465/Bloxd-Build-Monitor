export const id = 17;
export const ids = [17];
export const modules = {
  40273: (ee, ie, He) => {
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
          Ke && "Mesh" === ye.getEntityType(Ke) && ye.openShop(ee, !0)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);