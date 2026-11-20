export const id = 10;
export const ids = [10];
export const modules = {
  38651: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      default: () => Fz
    });
    const Fz = function(zz, tz, sz) {
      let Fz;
      return {
        onCreate: zz => {
          Fz = zz
        },
        onPlayerAltAction: (zz, tz, sz, Wz, Xz, Oz) => {
          Oz && "Mesh" === Fz.getEntityType(Oz) && ("Permanent Upgrades" === Fz.getEntityName(Oz) ? Fz.openShop(zz, !1, "Upgrades") : "Items" === Fz.getEntityName(Oz) ? Fz.openShop(zz, !1, "Items") : "Prestige" === Fz.getEntityName(Oz) && Fz.openShop(zz, !1, "Prestige"))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);