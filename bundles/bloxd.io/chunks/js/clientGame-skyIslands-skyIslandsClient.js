export const id = 29;
export const ids = [29];
export const modules = {
  40666: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      default: () => OM
    });
    const OM = function() {
      let MM;
      return {
        onCreate: rM => {
          MM = rM
        },
        onPlayerAltAction: (rM, iM, OM, SM, jM, aM) => {
          if (!aM || "Mesh" !== MM.getEntityType(aM)) return;
          const PM = MM.getEntityName(aM);
          "Perks" === PM ? MM.openShop(rM, !1, "Perks") : "Returning Bonus" === PM && MM.openShop(rM, !1, "Returning Player Bonus")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);