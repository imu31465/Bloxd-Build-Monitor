export const id = 16;
export const ids = [16];
export const modules = {
  38645: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      default: () => Ab
    });
    const Ab = function(bb, ab, Ub) {
      let Ab;
      return {
        onCreate: bb => {
          Ab = bb
        },
        onPlayerAltAction: (bb, ab, Ub, Mb, Tb, Eb) => {
          Eb && "Mesh" === Ab.getEntityType(Eb) && Ab.openShop(bb, !0)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);