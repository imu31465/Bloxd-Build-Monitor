export const id = 27;
export const ids = [27];
export const modules = {
  41228: (dd, Od, md) => {
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
          null !== Xd && "Mesh" === Wd.getEntityType(Xd) && "Weaponmaster" === Wd.getEntityName(Xd) && Wd.openShop(dd, !1, "PvpCivWeapon")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);