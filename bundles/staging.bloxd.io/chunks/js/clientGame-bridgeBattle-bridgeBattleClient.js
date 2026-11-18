export const id = 10;
export const ids = [10];
export const modules = {
  38216: (JJ, cJ, ZJ) => {
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
          XJ && "Mesh" === FJ.getEntityType(XJ) && ("Permanent Upgrades" === FJ.getEntityName(XJ) ? FJ.openShop(JJ, !1, "Upgrades") : "Items" === FJ.getEntityName(XJ) ? FJ.openShop(JJ, !1, "Items") : "Prestige" === FJ.getEntityName(XJ) && FJ.openShop(JJ, !1, "Prestige"))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);