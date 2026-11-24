export const id = 24;
export const ids = [24];
export const modules = {
  39579: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      default: () => tS
    });
    const tS = function() {
      let SS;
      return {
        onCreate: HS => {
          SS = HS
        },
        onPlayerAltAction: (HS, gS, tS, bS, XS, xS) => {
          if (!xS || "Mesh" !== SS.getEntityType(xS)) return;
          const NS = SS.getEntityName(xS);
          "Perks" === NS ? SS.openShop(HS, !1, "Perks") : "Returning Bonus" === NS && SS.openShop(HS, !1, "Returning Player Bonus")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);