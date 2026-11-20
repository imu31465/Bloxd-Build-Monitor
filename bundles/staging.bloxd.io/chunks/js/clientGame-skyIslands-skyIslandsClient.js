export const id = 24;
export const ids = [24];
export const modules = {
  39123: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      default: () => kb
    });
    const kb = function() {
      let bb;
      return {
        onCreate: cb => {
          bb = cb
        },
        onPlayerAltAction: (cb, sb, kb, Wb, ab, Tb) => {
          if (!Tb || "Mesh" !== bb.getEntityType(Tb)) return;
          const Ub = bb.getEntityName(Tb);
          "Perks" === Ub ? bb.openShop(cb, !1, "Perks") : "Returning Bonus" === Ub && bb.openShop(cb, !1, "Returning Player Bonus")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);