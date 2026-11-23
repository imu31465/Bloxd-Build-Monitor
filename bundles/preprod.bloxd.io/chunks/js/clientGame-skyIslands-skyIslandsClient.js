export const id = 24;
export const ids = [24];
export const modules = {
  39360: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      default: () => QC
    });
    const QC = function() {
      let CC;
      return {
        onCreate: zC => {
          CC = zC
        },
        onPlayerAltAction: (zC, ZC, QC, wC, bC, nC) => {
          if (!nC || "Mesh" !== CC.getEntityType(nC)) return;
          const fC = CC.getEntityName(nC);
          "Perks" === fC ? CC.openShop(zC, !1, "Perks") : "Returning Bonus" === fC && CC.openShop(zC, !1, "Returning Player Bonus")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);