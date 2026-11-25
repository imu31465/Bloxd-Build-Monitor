export const id = 10;
export const ids = [10];
export const modules = {
  39699: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      default: () => wG
    });
    const wG = function(GG, bG, ZG) {
      let wG;
      return {
        onCreate: GG => {
          wG = GG
        },
        onPlayerAltAction: (GG, bG, ZG, SG, LG, yG) => {
          yG && "Mesh" === wG.getEntityType(yG) && ("Permanent Upgrades" === wG.getEntityName(yG) ? wG.openShop(GG, !1, "Upgrades") : "Items" === wG.getEntityName(yG) ? wG.openShop(GG, !1, "Items") : "Prestige" === wG.getEntityName(yG) && wG.openShop(GG, !1, "Prestige"))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);