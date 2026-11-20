export const id = 16;
export const ids = [16];
export const modules = {
  38998: (bb, cb, sb) => {
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
          Tb && "Mesh" === kb.getEntityType(Tb) && kb.openShop(bb, !0)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);