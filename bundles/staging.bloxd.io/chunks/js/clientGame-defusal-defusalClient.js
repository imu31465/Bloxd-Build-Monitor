export const id = 16;
export const ids = [16];
export const modules = {
  39445: (SS, HS, gS) => {
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
          xS && "Mesh" === tS.getEntityType(xS) && tS.openShop(SS, !0)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);