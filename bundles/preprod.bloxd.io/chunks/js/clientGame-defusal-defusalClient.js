export const id = 17;
export const ids = [17];
export const modules = {
  40699: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      default: () => mW
    });
    const mW = function(WW, iW, OW) {
      let mW;
      return {
        onCreate: WW => {
          mW = WW
        },
        onPlayerAltAction: (WW, iW, OW, EW, NW, PW) => {
          PW && "Mesh" === mW.getEntityType(PW) && mW.openShop(WW, !0)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);