export const id = 15;
export const ids = [15];
export const modules = {
  38777: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      default: () => nz
    });
    const Ez = [
        [25, 8, 56],
        [25, 8, 54]
      ],
      nz = function(zz, uz, bz) {
        let nz;
        return {
          onCreate: zz => {
            nz = zz
          },
          onPlayerAltAction: (zz, uz, bz, iz, lz, Mz) => {
            Ez.some((zz => zz[0] === uz && zz[2] === iz)) && nz.openShop(zz, !1)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);