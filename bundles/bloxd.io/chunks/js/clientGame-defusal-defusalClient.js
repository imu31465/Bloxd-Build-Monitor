export const id = 16;
export const ids = [16];
export const modules = {
  39025: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      default: () => Bb
    });
    const Bb = function(bb, ub, hb) {
      let Bb;
      return {
        onCreate: bb => {
          Bb = bb
        },
        onPlayerAltAction: (bb, ub, hb, Ob, Gb, Ub) => {
          Ub && "Mesh" === Bb.getEntityType(Ub) && Bb.openShop(bb, !0)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);