export const id = 10;
export const ids = [10];
export const modules = {
  38206: (BB, TB, dB) => {
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
          lB && "Mesh" === VB.getEntityType(lB) && ("Permanent Upgrades" === VB.getEntityName(lB) ? VB.openShop(BB, !1, "Upgrades") : "Items" === VB.getEntityName(lB) ? VB.openShop(BB, !1, "Items") : "Prestige" === VB.getEntityName(lB) && VB.openShop(BB, !1, "Prestige"))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);