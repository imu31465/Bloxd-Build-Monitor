export const id = 16;
export const ids = [16];
export const modules = {
  38784: (zz, tz, sz) => {
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
          Oz && "Mesh" === Fz.getEntityType(Oz) && Fz.openShop(zz, !0)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);