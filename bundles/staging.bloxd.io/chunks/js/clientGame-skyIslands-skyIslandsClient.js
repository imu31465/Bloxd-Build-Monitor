export const id = 30;
export const ids = [30];
export const modules = {
  40896: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      default: () => mW
    });
    const mW = function() {
      let WW;
      return {
        onCreate: iW => {
          WW = iW
        },
        onPlayerAltAction: (iW, OW, mW, EW, NW, PW) => {
          if (!PW || "Mesh" !== WW.getEntityType(PW)) return;
          const LW = WW.getEntityName(PW);
          "Perks" === LW ? WW.openShop(iW, !1, "Perks") : "Returning Bonus" === LW && WW.openShop(iW, !1, "Returning Player Bonus")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);