export const id = 24;
export const ids = [24];
export const modules = {
  38496: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      default: () => FJ
    });
    const FJ = function() {
      let JJ;
      return {
        onCreate: cJ => {
          JJ = cJ
        },
        onPlayerAltAction: (cJ, ZJ, FJ, UJ, eJ, XJ) => {
          if (!XJ || "Mesh" !== JJ.getEntityType(XJ)) return;
          const AJ = JJ.getEntityName(XJ);
          "Perks" === AJ ? JJ.openShop(cJ, !1, "Perks") : "Returning Bonus" === AJ && JJ.openShop(cJ, !1, "Returning Player Bonus")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);