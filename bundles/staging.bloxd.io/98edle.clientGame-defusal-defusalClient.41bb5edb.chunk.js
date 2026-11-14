export const id = 14;
export const ids = [14];
export const modules = {
  37262: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      default: () => wW
    });
    const wW = function(WW, RW, MW) {
      let wW;
      return {
        onCreate: WW => {
          wW = WW
        },
        onPlayerAltAction: (WW, RW, MW, CW, zR, AW) => {
          AW && "Mesh" === wW.getEntityType(AW) && wW.openShop(WW, !0)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);