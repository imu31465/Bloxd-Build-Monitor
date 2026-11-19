export const id = 24;
export const ids = [24];
export const modules = {
  38835: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      default: () => ID
    });
    const ID = function() {
      let DD;
      return {
        onCreate: CD => {
          DD = CD
        },
        onPlayerAltAction: (CD, cD, ID, pD, iD, fD) => {
          if (!fD || "Mesh" !== DD.getEntityType(fD)) return;
          const bD = DD.getEntityName(fD);
          "Perks" === bD ? DD.openShop(CD, !1, "Perks") : "Returning Bonus" === bD && DD.openShop(CD, !1, "Returning Player Bonus")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);