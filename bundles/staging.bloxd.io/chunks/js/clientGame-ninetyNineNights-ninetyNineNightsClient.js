export const id = 20;
export const ids = [20];
export const modules = {
  38671: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      default: () => Mb
    });
    var Ab = Ub(22);
    const Mb = function(bb, ab, Ub) {
      let Mb;
      return {
        onCreate: bb => {
          Mb = bb
        },
        onPlayerClick: (bb, ab, Ub, Tb, Eb, Yb) => {
          ab || "Workbench" !== Mb.getMetaInfo(Yb).rootName || Ab.m.IR("toggleMenu", "inventory|Workbench")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);