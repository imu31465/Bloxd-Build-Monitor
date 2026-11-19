export const id = 23;
export const ids = [23];
export const modules = {
  38844: (YY, rY, DY) => {
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
          null !== RY && "Mesh" === FY.getEntityType(RY) && "Weaponmaster" === FY.getEntityName(RY) && FY.openShop(YY, !1, "PvpCivWeapon")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);