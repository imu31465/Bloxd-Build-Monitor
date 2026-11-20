export const id = 13;
export const ids = [13];
export const modules = {
  38537: (bb, ab, Ub) => {
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
          Eb && "Mesh" === Ab.getEntityType(Eb) && "Quartermaster" === Ab.getEntityName(Eb) && Ab.openShop(bb, !1, "Armoury")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);