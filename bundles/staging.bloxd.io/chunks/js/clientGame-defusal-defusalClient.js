export const id = 16;
export const ids = [16];
export const modules = {
  39844: (GG, bG, ZG) => {
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
          yG && "Mesh" === wG.getEntityType(yG) && wG.openShop(GG, !0)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);