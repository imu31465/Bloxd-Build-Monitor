export const id = 16;
export const ids = [16];
export const modules = {
  40403: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      default: () => rH
    });
    const AH = [
        [25, 8, 56],
        [25, 8, 54]
      ],
      rH = function(HH, BH, LH) {
        let rH;
        return {
          onCreate: HH => {
            rH = HH
          },
          onPlayerAltAction: (HH, BH, LH, SH, hH, tH) => {
            AH.some((HH => HH[0] === BH && HH[2] === SH)) && rH.openShop(HH, !1)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);