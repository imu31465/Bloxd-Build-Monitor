export const id = 17;
export const ids = [17];
export const modules = {
  40813: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      default: () => eb
    });
    const eb = function(bb, wb, Mb) {
      let eb;
      return {
        onCreate: bb => {
          eb = bb
        },
        onPlayerAltAction: (bb, wb, Mb, Hb, pb, Vb) => {
          Vb && "Mesh" === eb.getEntityType(Vb) && eb.openShop(bb, !0)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);