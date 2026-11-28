export const id = 14;
export const ids = [14];
export const modules = {
  40896: (dd, Od, md) => {
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
          Xd && "Mesh" === Wd.getEntityType(Xd) && "Quartermaster" === Wd.getEntityName(Xd) && Wd.openShop(dd, !1, "Armoury")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);