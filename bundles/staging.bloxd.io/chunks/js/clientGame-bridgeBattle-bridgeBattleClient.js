export const id = 10;
export const ids = [10];
export const modules = {
  40635: (bb, wb, Mb) => {
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
          Vb && "Mesh" === eb.getEntityType(Vb) && ("Permanent Upgrades" === eb.getEntityName(Vb) ? eb.openShop(bb, !1, "Upgrades") : "Items" === eb.getEntityName(Vb) ? eb.openShop(bb, !1, "Items") : "Prestige" === eb.getEntityName(Vb) && eb.openShop(bb, !1, "Prestige"))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);