export const id = 15;
export const ids = [15];
export const modules = {
  39019: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      default: () => Ob
    });
    const Bb = [
        [25, 8, 56],
        [25, 8, 54]
      ],
      Ob = function(bb, ub, hb) {
        let Ob;
        return {
          onCreate: bb => {
            Ob = bb
          },
          onPlayerAltAction: (bb, ub, hb, Gb, Ub, Lb) => {
            Bb.some((bb => bb[0] === ub && bb[2] === Gb)) && Ob.openShop(bb, !1)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);