export const id = 23;
export const ids = [23];
export const modules = {
  39620: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      default: () => QB
    });
    const QB = function(BB, jB, zB) {
      let QB;
      return {
        onCreate: BB => {
          QB = BB
        },
        onPlayerAltAction: (BB, jB, zB, nB, dB, IB) => {
          null !== IB && "Mesh" === QB.getEntityType(IB) && "Weaponmaster" === QB.getEntityName(IB) && QB.openShop(BB, !1, "PvpCivWeapon")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);