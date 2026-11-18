export const id = 13;
export const ids = [13];
export const modules = {
  38223: (JJ, cJ, ZJ) => {
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
          XJ && "Mesh" === FJ.getEntityType(XJ) && "Quartermaster" === FJ.getEntityName(XJ) && FJ.openShop(JJ, !1, "Armoury")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);