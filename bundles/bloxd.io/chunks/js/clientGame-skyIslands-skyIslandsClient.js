export const id = 24;
export const ids = [24];
export const modules = {
  39659: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      default: () => WT
    });
    const WT = function() {
      let TT;
      return {
        onCreate: UT => {
          TT = UT
        },
        onPlayerAltAction: (UT, mT, WT, zT, MT, gT) => {
          if (!gT || "Mesh" !== TT.getEntityType(gT)) return;
          const nT = TT.getEntityName(gT);
          "Perks" === nT ? TT.openShop(UT, !1, "Perks") : "Returning Bonus" === nT && TT.openShop(UT, !1, "Returning Player Bonus")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);