export const id = 13;
export const ids = [13];
export const modules = {
  38661: (zz, tz, sz) => {
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
          Oz && "Mesh" === Fz.getEntityType(Oz) && "Quartermaster" === Fz.getEntityName(Oz) && Fz.openShop(zz, !1, "Armoury")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);