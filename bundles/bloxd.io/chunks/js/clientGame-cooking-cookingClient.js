export const id = 15;
export const ids = [15];
export const modules = {
  38720: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      default: () => pD
    });
    const ID = [
        [25, 8, 56],
        [25, 8, 54]
      ],
      pD = function(DD, CD, cD) {
        let pD;
        return {
          onCreate: DD => {
            pD = DD
          },
          onPlayerAltAction: (DD, CD, cD, iD, fD, bD) => {
            ID.some((DD => DD[0] === CD && DD[2] === iD)) && pD.openShop(DD, !1)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);