export const id = 10;
export const ids = [10];
export const modules = {
  38593: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      default: () => FY
    });
    const FY = function(YY, rY, DY) {
      let FY;
      return {
        onCreate: YY => {
          FY = YY
        },
        onPlayerAltAction: (YY, rY, DY, AY, IY, RY) => {
          RY && "Mesh" === FY.getEntityType(RY) && ("Permanent Upgrades" === FY.getEntityName(RY) ? FY.openShop(YY, !1, "Upgrades") : "Items" === FY.getEntityName(RY) ? FY.openShop(YY, !1, "Items") : "Prestige" === FY.getEntityName(RY) && FY.openShop(YY, !1, "Prestige"))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);