export const id = 17;
export const ids = [17];
export const modules = {
  40409: (HH, BH, LH) => {
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
          hH && "Mesh" === AH.getEntityType(hH) && AH.openShop(HH, !0)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);