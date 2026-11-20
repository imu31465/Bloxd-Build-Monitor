export const id = 24;
export const ids = [24];
export const modules = {
  39307: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      default: () => lT
    });
    const lT = function() {
      let TT;
      return {
        onCreate: kT => {
          TT = kT
        },
        onPlayerAltAction: (kT, cT, lT, MT, KT, OT) => {
          if (!OT || "Mesh" !== TT.getEntityType(OT)) return;
          const yT = TT.getEntityName(OT);
          "Perks" === yT ? TT.openShop(kT, !1, "Perks") : "Returning Bonus" === yT && TT.openShop(kT, !1, "Returning Player Bonus")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);