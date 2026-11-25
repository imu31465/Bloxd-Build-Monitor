export const id = 13;
export const ids = [13];
export const modules = {
  39714: (GG, bG, ZG) => {
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
          yG && "Mesh" === wG.getEntityType(yG) && "Quartermaster" === wG.getEntityName(yG) && wG.openShop(GG, !1, "Armoury")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);