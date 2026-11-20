export const id = 10;
export const ids = [10];
export const modules = {
  38880: (bb, ub, hb) => {
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
          Ub && "Mesh" === Bb.getEntityType(Ub) && ("Permanent Upgrades" === Bb.getEntityName(Ub) ? Bb.openShop(bb, !1, "Upgrades") : "Items" === Bb.getEntityName(Ub) ? Bb.openShop(bb, !1, "Items") : "Prestige" === Bb.getEntityName(Ub) && Bb.openShop(bb, !1, "Prestige"))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);