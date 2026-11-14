export const id = 21;
export const ids = [21];
export const modules = {
  37662: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      default: () => CF
    });
    const CF = function() {
      let FF;
      return {
        onCreate: WF => {
          FF = WF
        },
        onPlayerAltAction: (WF, SF, CF, AF, uF, hF) => {
          if (!hF || "Mesh" !== FF.getEntityType(hF)) return;
          const bW = FF.getEntityName(hF);
          "Perks" === bW ? FF.openShop(WF, !1, "Perks") : "Returning Bonus" === bW && FF.openShop(WF, !1, "Returning Player Bonus")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);