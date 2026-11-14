export const id = 13;
export const ids = [13];
export const modules = {
  37256: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      default: () => CW
    });
    const wW = [
        [25, 8, 56],
        [25, 8, 54]
      ],
      CW = function(WW, RW, MW) {
        let CW;
        return {
          onCreate: WW => {
            CW = WW
          },
          onPlayerAltAction: (WW, RW, MW, zR, AW, bR) => {
            wW.some((WW => WW[0] === RW && WW[2] === zR)) && CW.openShop(WW, !1)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);