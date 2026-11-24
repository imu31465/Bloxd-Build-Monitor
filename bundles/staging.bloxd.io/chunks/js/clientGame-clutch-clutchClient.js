export const id = 13;
export const ids = [13];
export const modules = {
  39299: (SS, HS, gS) => {
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
          xS && "Mesh" === tS.getEntityType(xS) && "Quartermaster" === tS.getEntityName(xS) && tS.openShop(SS, !1, "Armoury")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);