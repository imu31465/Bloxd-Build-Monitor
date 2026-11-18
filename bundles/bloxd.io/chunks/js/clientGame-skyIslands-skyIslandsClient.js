export const id = 24;
export const ids = [24];
export const modules = {
  38450: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      default: () => VB
    });
    const VB = function() {
      let BB;
      return {
        onCreate: TB => {
          BB = TB
        },
        onPlayerAltAction: (TB, dB, VB, yB, pB, lB) => {
          if (!lB || "Mesh" !== BB.getEntityType(lB)) return;
          const JB = BB.getEntityName(lB);
          "Perks" === JB ? BB.openShop(TB, !1, "Perks") : "Returning Bonus" === JB && BB.openShop(TB, !1, "Returning Player Bonus")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);