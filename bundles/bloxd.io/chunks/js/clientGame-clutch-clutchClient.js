export const id = 13;
export const ids = [13];
export const modules = {
  38632: (zz, uz, bz) => {
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
          lz && "Mesh" === Ez.getEntityType(lz) && "Quartermaster" === Ez.getEntityName(lz) && Ez.openShop(zz, !1, "Armoury")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);