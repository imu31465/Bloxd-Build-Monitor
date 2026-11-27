export const id = 14;
export const ids = [14];
export const modules = {
  40548: (WW, iW, OW) => {
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
          PW && "Mesh" === mW.getEntityType(PW) && "Quartermaster" === mW.getEntityName(PW) && mW.openShop(WW, !1, "Armoury")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);