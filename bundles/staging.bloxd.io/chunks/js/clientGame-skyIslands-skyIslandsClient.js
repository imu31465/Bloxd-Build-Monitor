export const id = 29;
export const ids = [29];
export const modules = {
  40588: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      default: () => AH
    });
    const AH = function() {
      let HH;
      return {
        onCreate: BH => {
          HH = BH
        },
        onPlayerAltAction: (BH, LH, AH, rH, SH, hH) => {
          if (!hH || "Mesh" !== HH.getEntityType(hH)) return;
          const tH = HH.getEntityName(hH);
          "Perks" === tH ? HH.openShop(BH, !1, "Perks") : "Returning Bonus" === tH && HH.openShop(BH, !1, "Returning Player Bonus")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);