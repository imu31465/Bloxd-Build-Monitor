export const id = 16;
export const ids = [16];
export const modules = {
  38380: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      default: () => FJ
    });
    const FJ = function(JJ, cJ, ZJ) {
      let FJ;
      return {
        onCreate: JJ => {
          FJ = JJ
        },
        onPlayerAltAction: (JJ, cJ, ZJ, UJ, eJ, XJ) => {
          XJ && "Mesh" === FJ.getEntityType(XJ) && FJ.openShop(JJ, !0)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);