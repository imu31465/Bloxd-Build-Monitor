export const id = 16;
export const ids = [16];
export const modules = {
  38783: (zz, uz, bz) => {
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
          lz && "Mesh" === Ez.getEntityType(lz) && Ez.openShop(zz, !0)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);