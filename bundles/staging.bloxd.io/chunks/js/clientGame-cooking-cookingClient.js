export const id = 16;
export const ids = [16];
export const modules = {
  41042: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      default: () => Fd
    });
    const Wd = [
        [25, 8, 56],
        [25, 8, 54]
      ],
      Fd = function(dd, Od, md) {
        let Fd;
        return {
          onCreate: dd => {
            Fd = dd
          },
          onPlayerAltAction: (dd, Od, md, Rd, Xd, Kd) => {
            Wd.some((dd => dd[0] === Od && dd[2] === Rd)) && Fd.openShop(dd, !1)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);