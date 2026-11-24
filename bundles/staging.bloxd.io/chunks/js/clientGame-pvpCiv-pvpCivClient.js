export const id = 23;
export const ids = [23];
export const modules = {
  39577: (SS, HS, gS) => {
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
          null !== xS && "Mesh" === tS.getEntityType(xS) && "Weaponmaster" === tS.getEntityName(xS) && tS.openShop(SS, !1, "PvpCivWeapon")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);