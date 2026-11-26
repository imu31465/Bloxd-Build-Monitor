export const id = 29;
export const ids = [29];
export const modules = {
  40833: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      default: () => JV
    });
    const JV = function() {
      let VV;
      return {
        onCreate: eV => {
          VV = eV
        },
        onPlayerAltAction: (eV, xV, JV, YV, UV, yV) => {
          if (!yV || "Mesh" !== VV.getEntityType(yV)) return;
          const pV = VV.getEntityName(yV);
          "Perks" === pV ? VV.openShop(eV, !1, "Perks") : "Returning Bonus" === pV && VV.openShop(eV, !1, "Returning Player Bonus")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);