export const id = 15;
export const ids = [15];
export const modules = {
  39485: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      default: () => JB
    });
    const TB = [
        [25, 8, 56],
        [25, 8, 54]
      ],
      JB = function(BB, IB, ZB) {
        let JB;
        return {
          onCreate: BB => {
            JB = BB
          },
          onPlayerAltAction: (BB, IB, ZB, oB, GB, vB) => {
            TB.some((BB => BB[0] === IB && BB[2] === oB)) && JB.openShop(BB, !1)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);