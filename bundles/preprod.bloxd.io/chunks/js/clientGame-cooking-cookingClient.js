export const id = 16;
export const ids = [16];
export const modules = {
  40694: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      default: () => EW
    });
    const mW = [
        [25, 8, 56],
        [25, 8, 54]
      ],
      EW = function(WW, iW, OW) {
        let EW;
        return {
          onCreate: WW => {
            EW = WW
          },
          onPlayerAltAction: (WW, iW, OW, NW, PW, LW) => {
            mW.some((WW => WW[0] === iW && WW[2] === NW)) && EW.openShop(WW, !1)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);