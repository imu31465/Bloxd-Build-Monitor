export const id = 9;
export const ids = [9];
export const modules = {
  37243: (WW, RW, MW) => {
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
          AW && "Mesh" === wW.getEntityType(AW) && ("Permanent Upgrades" === wW.getEntityName(AW) ? wW.openShop(WW, !1, "Upgrades") : "Items" === wW.getEntityName(AW) ? wW.openShop(WW, !1, "Items") : "Prestige" === wW.getEntityName(AW) && wW.openShop(WW, !1, "Prestige"))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);