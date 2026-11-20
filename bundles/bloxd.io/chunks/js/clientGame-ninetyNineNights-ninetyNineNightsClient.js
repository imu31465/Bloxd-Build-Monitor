export const id = 20;
export const ids = [20];
export const modules = {
  39021: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      default: () => Wb
    });
    var kb = sb(26);
    const Wb = function(bb, cb, sb) {
      let Wb;
      return {
        onCreate: bb => {
          Wb = bb
        },
        onPlayerClick: (bb, cb, sb, ab, Tb, Ub) => {
          cb || "Workbench" !== Wb.getMetaInfo(Ub).rootName || kb.j.QQ("toggleMenu", "inventory|Workbench")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);