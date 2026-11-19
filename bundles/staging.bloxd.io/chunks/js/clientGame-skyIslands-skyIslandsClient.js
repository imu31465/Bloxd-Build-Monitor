export const id = 24;
export const ids = [24];
export const modules = {
  38464: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      default: () => iT
    });
    const iT = function() {
      let TT;
      return {
        onCreate: oT => {
          TT = oT
        },
        onPlayerAltAction: (oT, IT, iT, zT, kT, WT) => {
          if (!WT || "Mesh" !== TT.getEntityType(WT)) return;
          const XT = TT.getEntityName(WT);
          "Perks" === XT ? TT.openShop(oT, !1, "Perks") : "Returning Bonus" === XT && TT.openShop(oT, !1, "Returning Player Bonus")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);