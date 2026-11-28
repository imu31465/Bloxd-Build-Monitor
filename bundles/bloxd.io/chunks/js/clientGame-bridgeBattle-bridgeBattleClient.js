export const id = 10;
export const ids = [10];
export const modules = {
  40874: (dd, Od, md) => {
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
          Xd && "Mesh" === Wd.getEntityType(Xd) && ("Permanent Upgrades" === Wd.getEntityName(Xd) ? Wd.openShop(dd, !1, "Upgrades") : "Items" === Wd.getEntityName(Xd) ? Wd.openShop(dd, !1, "Items") : "Prestige" === Wd.getEntityName(Xd) && Wd.openShop(dd, !1, "Prestige"))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);