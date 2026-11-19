export const id = 23;
export const ids = [23];
export const modules = {
  38892: (zz, uz, bz) => {
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
          null !== lz && "Mesh" === Ez.getEntityType(lz) && "Weaponmaster" === Ez.getEntityName(lz) && Ez.openShop(zz, !1, "PvpCivWeapon")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);