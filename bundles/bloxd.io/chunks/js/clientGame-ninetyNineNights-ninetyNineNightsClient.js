export const id = 20;
export const ids = [20];
export const modules = {
  39048: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      default: () => Ob
    });
    var Bb = hb(16);
    const Ob = function(bb, ub, hb) {
      let Ob;
      return {
        onCreate: bb => {
          Ob = bb
        },
        onPlayerClick: (bb, ub, hb, Gb, Ub, Lb) => {
          ub || "Workbench" !== Ob.getMetaInfo(Lb).rootName || Bb.i.vp("toggleMenu", "inventory|Workbench")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);