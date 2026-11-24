export const id = 15;
export const ids = [15];
export const modules = {
  39497: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      default: () => nB
    });
    const QB = [
        [25, 8, 56],
        [25, 8, 54]
      ],
      nB = function(BB, jB, zB) {
        let nB;
        return {
          onCreate: BB => {
            nB = BB
          },
          onPlayerAltAction: (BB, jB, zB, dB, IB, NB) => {
            QB.some((BB => BB[0] === jB && BB[2] === dB)) && nB.openShop(BB, !1)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);