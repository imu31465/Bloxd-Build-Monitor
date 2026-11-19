export const id = 15;
export const ids = [15];
export const modules = {
  38737: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      default: () => AY
    });
    const FY = [
        [25, 8, 56],
        [25, 8, 54]
      ],
      AY = function(YY, rY, DY) {
        let AY;
        return {
          onCreate: YY => {
            AY = YY
          },
          onPlayerAltAction: (YY, rY, DY, IY, RY, OY) => {
            FY.some((YY => YY[0] === rY && YY[2] === IY)) && AY.openShop(YY, !1)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);