export const id = 29;
export const ids = [29];
export const modules = {
  40319: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      default: () => YB
    });
    const YB = function() {
      let BB;
      return {
        onCreate: OB => {
          BB = OB
        },
        onPlayerAltAction: (OB, GB, YB, DB, QB, oB) => {
          if (!oB || "Mesh" !== BB.getEntityType(oB)) return;
          const jB = BB.getEntityName(oB);
          "Perks" === jB ? BB.openShop(OB, !1, "Perks") : "Returning Bonus" === jB && BB.openShop(OB, !1, "Returning Player Bonus")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);