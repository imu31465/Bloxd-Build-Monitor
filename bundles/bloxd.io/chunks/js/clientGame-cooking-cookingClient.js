export const id = 15;
export const ids = [15];
export const modules = {
  38777: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      default: () => Wz
    });
    const Fz = [
        [25, 8, 56],
        [25, 8, 54]
      ],
      Wz = function(zz, tz, sz) {
        let Wz;
        return {
          onCreate: zz => {
            Wz = zz
          },
          onPlayerAltAction: (zz, tz, sz, Xz, Oz, oz) => {
            Fz.some((zz => zz[0] === tz && zz[2] === Xz)) && Wz.openShop(zz, !1)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);