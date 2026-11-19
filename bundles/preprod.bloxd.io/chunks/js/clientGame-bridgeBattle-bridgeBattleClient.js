export const id = 10;
export const ids = [10];
export const modules = {
  38620: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      default: () => Ez
    });
    const Ez = function(zz, uz, bz) {
      let Ez;
      return {
        onCreate: zz => {
          Ez = zz
        },
        onPlayerAltAction: (zz, uz, bz, nz, iz, lz) => {
          lz && "Mesh" === Ez.getEntityType(lz) && ("Permanent Upgrades" === Ez.getEntityName(lz) ? Ez.openShop(zz, !1, "Upgrades") : "Items" === Ez.getEntityName(lz) ? Ez.openShop(zz, !1, "Items") : "Prestige" === Ez.getEntityName(lz) && Ez.openShop(zz, !1, "Prestige"))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);