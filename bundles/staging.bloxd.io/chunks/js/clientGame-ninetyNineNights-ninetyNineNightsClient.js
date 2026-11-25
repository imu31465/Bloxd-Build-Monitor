export const id = 20;
export const ids = [20];
export const modules = {
  39862: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      default: () => SG
    });
    var wG = ZG(19);
    const SG = function(GG, bG, ZG) {
      let SG;
      return {
        onCreate: GG => {
          SG = GG
        },
        onPlayerClick: (GG, bG, ZG, LG, yG, kG) => {
          bG || "Workbench" !== SG.getMetaInfo(kG).rootName || wG.l.xh("toggleMenu", "inventory|Workbench")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);