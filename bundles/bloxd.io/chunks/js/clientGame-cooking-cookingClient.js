export const id = 15;
export const ids = [15];
export const modules = {
  38345: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      default: () => yB
    });
    const VB = [
        [25, 8, 56],
        [25, 8, 54]
      ],
      yB = function(BB, TB, dB) {
        let yB;
        return {
          onCreate: BB => {
            yB = BB
          },
          onPlayerAltAction: (BB, TB, dB, pB, lB, JB) => {
            VB.some((BB => BB[0] === TB && BB[2] === pB)) && yB.openShop(BB, !1)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);