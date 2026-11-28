export const id = 30;
export const ids = [30];
export const modules = {
  41011: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      default: () => eb
    });
    const eb = function() {
      let bb;
      return {
        onCreate: wb => {
          bb = wb
        },
        onPlayerAltAction: (wb, Mb, eb, Hb, pb, Vb) => {
          if (!Vb || "Mesh" !== bb.getEntityType(Vb)) return;
          const gb = bb.getEntityName(Vb);
          "Perks" === gb ? bb.openShop(wb, !1, "Perks") : "Returning Bonus" === gb && bb.openShop(wb, !1, "Returning Player Bonus")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);