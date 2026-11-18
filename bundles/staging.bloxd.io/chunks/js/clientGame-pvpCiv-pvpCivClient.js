export const id = 23;
export const ids = [23];
export const modules = {
  38446: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      default: () => VB
    });
    const VB = function(BB, TB, dB) {
      let VB;
      return {
        onCreate: BB => {
          VB = BB
        },
        onPlayerAltAction: (BB, TB, dB, yB, pB, lB) => {
          null !== lB && "Mesh" === VB.getEntityType(lB) && "Weaponmaster" === VB.getEntityName(lB) && VB.openShop(BB, !1, "PvpCivWeapon")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);