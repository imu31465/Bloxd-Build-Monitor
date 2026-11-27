export const id = 10;
export const ids = [10];
export const modules = {
  40513: (WW, iW, OW) => {
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
          PW && "Mesh" === mW.getEntityType(PW) && ("Permanent Upgrades" === mW.getEntityName(PW) ? mW.openShop(WW, !1, "Upgrades") : "Items" === mW.getEntityName(PW) ? mW.openShop(WW, !1, "Items") : "Prestige" === mW.getEntityName(PW) && mW.openShop(WW, !1, "Prestige"))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);