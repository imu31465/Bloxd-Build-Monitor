export const id = 23;
export const ids = [23];
export const modules = {
  38871: (zz, tz, sz) => {
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
          null !== Oz && "Mesh" === Fz.getEntityType(Oz) && "Weaponmaster" === Fz.getEntityName(Oz) && Fz.openShop(zz, !1, "PvpCivWeapon")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);