export const id = 13;
export const ids = [13];
export const modules = {
  38605: (YY, rY, DY) => {
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
          RY && "Mesh" === FY.getEntityType(RY) && "Quartermaster" === FY.getEntityName(RY) && FY.openShop(YY, !1, "Armoury")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);