export const id = 9;
export const ids = [9];
export const modules = {
  37588: (FF, WF, SF) => {
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
          hF && "Mesh" === CF.getEntityType(hF) && ("Permanent Upgrades" === CF.getEntityName(hF) ? CF.openShop(FF, !1, "Upgrades") : "Items" === CF.getEntityName(hF) ? CF.openShop(FF, !1, "Items") : "Prestige" === CF.getEntityName(hF) && CF.openShop(FF, !1, "Prestige"))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);