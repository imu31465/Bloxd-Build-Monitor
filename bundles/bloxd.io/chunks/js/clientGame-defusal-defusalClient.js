export const id = 17;
export const ids = [17];
export const modules = {
  41051: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      default: () => Wd
    });
    const Wd = function(dd, Od, md) {
      let Wd;
      return {
        onCreate: dd => {
          Wd = dd
        },
        onPlayerAltAction: (dd, Od, md, Fd, Rd, Xd) => {
          Xd && "Mesh" === Wd.getEntityType(Xd) && Wd.openShop(dd, !0)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);