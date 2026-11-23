export const id = 15;
export const ids = [15];
export const modules = {
  39246: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      default: () => wC
    });
    const QC = [
        [25, 8, 56],
        [25, 8, 54]
      ],
      wC = function(CC, zC, ZC) {
        let wC;
        return {
          onCreate: CC => {
            wC = CC
          },
          onPlayerAltAction: (CC, zC, ZC, bC, nC, fC) => {
            QC.some((CC => CC[0] === zC && CC[2] === bC)) && wC.openShop(CC, !1)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);