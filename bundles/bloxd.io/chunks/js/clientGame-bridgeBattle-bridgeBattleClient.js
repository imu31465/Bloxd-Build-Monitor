export const id = 10;
export const ids = [10];
export const modules = {
  38835: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      default: () => kb
    });
    const kb = function(bb, cb, sb) {
      let kb;
      return {
        onCreate: bb => {
          kb = bb
        },
        onPlayerAltAction: (bb, cb, sb, Wb, ab, Tb) => {
          Tb && "Mesh" === kb.getEntityType(Tb) && ("Permanent Upgrades" === kb.getEntityName(Tb) ? kb.openShop(bb, !1, "Upgrades") : "Items" === kb.getEntityName(Tb) ? kb.openShop(bb, !1, "Items") : "Prestige" === kb.getEntityName(Tb) && kb.openShop(bb, !1, "Prestige"))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);