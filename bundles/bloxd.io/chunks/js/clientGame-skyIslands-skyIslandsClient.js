export const id = 24;
export const ids = [24];
export const modules = {
  39622: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      default: () => QB
    });
    const QB = function() {
      let BB;
      return {
        onCreate: jB => {
          BB = jB
        },
        onPlayerAltAction: (jB, zB, QB, nB, dB, IB) => {
          if (!IB || "Mesh" !== BB.getEntityType(IB)) return;
          const NB = BB.getEntityName(IB);
          "Perks" === NB ? BB.openShop(jB, !1, "Perks") : "Returning Bonus" === NB && BB.openShop(jB, !1, "Returning Player Bonus")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);