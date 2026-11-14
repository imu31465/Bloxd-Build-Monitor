export const id = 20;
export const ids = [20];
export const modules = {
  37653: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      default: () => CF
    });
    const CF = function(FF, WF, SF) {
      let CF;
      return {
        onCreate: FF => {
          CF = FF
        },
        onPlayerAltAction: (FF, WF, SF, AF, uF, hF) => {
          null !== hF && "Mesh" === CF.getEntityType(hF) && "Weaponmaster" === CF.getEntityName(hF) && CF.openShop(FF, !1, "PvpCivWeapon")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);