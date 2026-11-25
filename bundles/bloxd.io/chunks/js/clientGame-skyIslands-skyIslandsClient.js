export const id = 24;
export const ids = [24];
export const modules = {
  39934: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      default: () => wG
    });
    const wG = function() {
      let GG;
      return {
        onCreate: bG => {
          GG = bG
        },
        onPlayerAltAction: (bG, ZG, wG, SG, LG, yG) => {
          if (!yG || "Mesh" !== GG.getEntityType(yG)) return;
          const kG = GG.getEntityName(yG);
          "Perks" === kG ? GG.openShop(bG, !1, "Perks") : "Returning Bonus" === kG && GG.openShop(bG, !1, "Returning Player Bonus")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);