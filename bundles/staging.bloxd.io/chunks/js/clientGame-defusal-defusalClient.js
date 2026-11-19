export const id = 16;
export const ids = [16];
export const modules = {
  38740: (YY, rY, DY) => {
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
          RY && "Mesh" === FY.getEntityType(RY) && FY.openShop(YY, !0)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);