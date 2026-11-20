export const id = 15;
export const ids = [15];
export const modules = {
  38991: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      default: () => Wb
    });
    const kb = [
        [25, 8, 56],
        [25, 8, 54]
      ],
      Wb = function(bb, cb, sb) {
        let Wb;
        return {
          onCreate: bb => {
            Wb = bb
          },
          onPlayerAltAction: (bb, cb, sb, ab, Tb, Ub) => {
            kb.some((bb => bb[0] === cb && bb[2] === ab)) && Wb.openShop(bb, !1)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);