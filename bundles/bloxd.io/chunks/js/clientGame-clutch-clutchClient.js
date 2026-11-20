export const id = 13;
export const ids = [13];
export const modules = {
  38887: (bb, ub, hb) => {
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
          Ub && "Mesh" === Bb.getEntityType(Ub) && "Quartermaster" === Bb.getEntityName(Ub) && Bb.openShop(bb, !1, "Armoury")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);