export const id = 23;
export const ids = [23];
export const modules = {
  39601: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      default: () => TB
    });
    const TB = function(BB, IB, ZB) {
      let TB;
      return {
        onCreate: BB => {
          TB = BB
        },
        onPlayerAltAction: (BB, IB, ZB, JB, oB, GB) => {
          null !== GB && "Mesh" === TB.getEntityType(GB) && "Weaponmaster" === TB.getEntityName(GB) && TB.openShop(BB, !1, "PvpCivWeapon")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);