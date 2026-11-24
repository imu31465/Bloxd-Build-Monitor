export const id = 10;
export const ids = [10];
export const modules = {
  39287: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      default: () => tS
    });
    const tS = function(SS, HS, gS) {
      let tS;
      return {
        onCreate: SS => {
          tS = SS
        },
        onPlayerAltAction: (SS, HS, gS, bS, XS, xS) => {
          xS && "Mesh" === tS.getEntityType(xS) && ("Permanent Upgrades" === tS.getEntityName(xS) ? tS.openShop(SS, !1, "Upgrades") : "Items" === tS.getEntityName(xS) ? tS.openShop(SS, !1, "Items") : "Prestige" === tS.getEntityName(xS) && tS.openShop(SS, !1, "Prestige"))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);