export const id = 10;
export const ids = [10];
export const modules = {
  40253: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      default: () => AH
    });
    const AH = function(HH, BH, LH) {
      let AH;
      return {
        onCreate: HH => {
          AH = HH
        },
        onPlayerAltAction: (HH, BH, LH, rH, SH, hH) => {
          hH && "Mesh" === AH.getEntityType(hH) && ("Permanent Upgrades" === AH.getEntityName(hH) ? AH.openShop(HH, !1, "Upgrades") : "Items" === AH.getEntityName(hH) ? AH.openShop(HH, !1, "Items") : "Prestige" === AH.getEntityName(hH) && AH.openShop(HH, !1, "Prestige"))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);