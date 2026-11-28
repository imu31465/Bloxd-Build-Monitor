export const id = 14;
export const ids = [14];
export const modules = {
  40664: (bb, wb, Mb) => {
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
          Vb && "Mesh" === eb.getEntityType(Vb) && "Quartermaster" === eb.getEntityName(Vb) && eb.openShop(bb, !1, "Armoury")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);