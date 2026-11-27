export const id = 16;
export const ids = [16];
export const modules = {
  40265: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      default: () => be
    });
    const ye = [
        [25, 8, 56],
        [25, 8, 54]
      ],
      be = function(ee, ie, He) {
        let be;
        return {
          onCreate: ee => {
            be = ee
          },
          onPlayerAltAction: (ee, ie, He, Me, Ke, Ue) => {
            ye.some((ee => ee[0] === ie && ee[2] === Me)) && be.openShop(ee, !1)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);