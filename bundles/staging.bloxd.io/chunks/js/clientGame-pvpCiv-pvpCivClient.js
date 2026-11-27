export const id = 27;
export const ids = [27];
export const modules = {
  40886: (WW, iW, OW) => {
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
          null !== PW && "Mesh" === mW.getEntityType(PW) && "Weaponmaster" === mW.getEntityName(PW) && mW.openShop(WW, !1, "PvpCivWeapon")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);