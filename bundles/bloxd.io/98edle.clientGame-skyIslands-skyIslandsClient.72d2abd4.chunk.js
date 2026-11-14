export const id = 21;
export const ids = [21];
export const modules = {
  37297: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      default: () => wW
    });
    const wW = function() {
      let WW;
      return {
        onCreate: RW => {
          WW = RW
        },
        onPlayerAltAction: (RW, MW, wW, CW, zR, AW) => {
          if (!AW || "Mesh" !== WW.getEntityType(AW)) return;
          const bR = WW.getEntityName(AW);
          "Perks" === bR ? WW.openShop(RW, !1, "Perks") : "Returning Bonus" === bR && WW.openShop(RW, !1, "Returning Player Bonus")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);