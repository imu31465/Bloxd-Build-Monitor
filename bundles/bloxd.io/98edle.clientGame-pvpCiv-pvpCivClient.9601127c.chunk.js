export const id = 20;
export const ids = [20];
export const modules = {
  37289: (WW, RW, MW) => {
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
          null !== AW && "Mesh" === wW.getEntityType(AW) && "Weaponmaster" === wW.getEntityName(AW) && wW.openShop(WW, !1, "PvpCivWeapon")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);