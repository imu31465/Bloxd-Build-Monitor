export const id = 15;
export const ids = [15];
export const modules = {
  39835: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      default: () => SG
    });
    const wG = [
        [25, 8, 56],
        [25, 8, 54]
      ],
      SG = function(GG, bG, ZG) {
        let SG;
        return {
          onCreate: GG => {
            SG = GG
          },
          onPlayerAltAction: (GG, bG, ZG, LG, yG, kG) => {
            wG.some((GG => GG[0] === bG && GG[2] === LG)) && SG.openShop(GG, !1)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);