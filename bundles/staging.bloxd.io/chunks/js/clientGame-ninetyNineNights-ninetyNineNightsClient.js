export const id = 24;
export const ids = [24];
export const modules = {
  40914: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      default: () => Hb
    });
    var eb = Mb(29);
    const Hb = function(bb, wb, Mb) {
      let Hb;
      return {
        onCreate: bb => {
          Hb = bb
        },
        onPlayerClick: (bb, wb, Mb, pb, Vb, gb) => {
          wb || "Workbench" !== Hb.getMetaInfo(gb).rootName || eb.k.iI("toggleMenu", "inventory|Workbench")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);