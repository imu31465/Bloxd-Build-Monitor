export const id = 24;
export const ids = [24];
export const modules = {
  39610: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      default: () => TB
    });
    const TB = function() {
      let BB;
      return {
        onCreate: IB => {
          BB = IB
        },
        onPlayerAltAction: (IB, ZB, TB, JB, oB, GB) => {
          if (!GB || "Mesh" !== BB.getEntityType(GB)) return;
          const vB = BB.getEntityName(GB);
          "Perks" === vB ? BB.openShop(IB, !1, "Perks") : "Returning Bonus" === vB && BB.openShop(IB, !1, "Returning Player Bonus")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);