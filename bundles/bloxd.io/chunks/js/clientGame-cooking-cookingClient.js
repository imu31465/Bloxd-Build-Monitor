export const id = 15;
export const ids = [15];
export const modules = {
  39440: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      default: () => bS
    });
    const tS = [
        [25, 8, 56],
        [25, 8, 54]
      ],
      bS = function(SS, HS, gS) {
        let bS;
        return {
          onCreate: SS => {
            bS = SS
          },
          onPlayerAltAction: (SS, HS, gS, XS, xS, NS) => {
            tS.some((SS => SS[0] === HS && SS[2] === XS)) && bS.openShop(SS, !1)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);