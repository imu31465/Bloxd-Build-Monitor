export const id = 15;
export const ids = [15];
export const modules = {
  38642: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      default: () => Mb
    });
    const Ab = [
        [25, 8, 56],
        [25, 8, 54]
      ],
      Mb = function(bb, ab, Ub) {
        let Mb;
        return {
          onCreate: bb => {
            Mb = bb
          },
          onPlayerAltAction: (bb, ab, Ub, Tb, Eb, Yb) => {
            Ab.some((bb => bb[0] === ab && bb[2] === Tb)) && Mb.openShop(bb, !1)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);