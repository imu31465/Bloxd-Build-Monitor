export const id = 13;
export const ids = [13];
export const modules = {
  38850: (bb, cb, sb) => {
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
          Tb && "Mesh" === kb.getEntityType(Tb) && "Quartermaster" === kb.getEntityName(Tb) && kb.openShop(bb, !1, "Armoury")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);