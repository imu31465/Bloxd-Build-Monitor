export const id = 24;
export const ids = [24];
export const modules = {
  38894: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      default: () => Ez
    });
    const Ez = function() {
      let zz;
      return {
        onCreate: uz => {
          zz = uz
        },
        onPlayerAltAction: (uz, bz, Ez, nz, iz, lz) => {
          if (!lz || "Mesh" !== zz.getEntityType(lz)) return;
          const Mz = zz.getEntityName(lz);
          "Perks" === Mz ? zz.openShop(uz, !1, "Perks") : "Returning Bonus" === Mz && zz.openShop(uz, !1, "Returning Player Bonus")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);