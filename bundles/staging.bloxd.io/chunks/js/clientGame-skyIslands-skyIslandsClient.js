export const id = 24;
export const ids = [24];
export const modules = {
  38853: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      default: () => FY
    });
    const FY = function() {
      let YY;
      return {
        onCreate: rY => {
          YY = rY
        },
        onPlayerAltAction: (rY, DY, FY, AY, IY, RY) => {
          if (!RY || "Mesh" !== YY.getEntityType(RY)) return;
          const OY = YY.getEntityName(RY);
          "Perks" === OY ? YY.openShop(rY, !1, "Perks") : "Returning Bonus" === OY && YY.openShop(rY, !1, "Returning Player Bonus")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);