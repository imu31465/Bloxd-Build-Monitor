export const id = 15;
export const ids = [15];
export const modules = {
  39377: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      default: () => sD
    });
    const pD = [
        [25, 8, 56],
        [25, 8, 54]
      ],
      sD = function(DD, zD, wD) {
        let sD;
        return {
          onCreate: DD => {
            sD = DD
          },
          onPlayerAltAction: (DD, zD, wD, KD, rD, LD) => {
            pD.some((DD => DD[0] === zD && DD[2] === KD)) && sD.openShop(DD, !1)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);