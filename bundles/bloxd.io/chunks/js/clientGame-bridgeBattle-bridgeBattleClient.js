export const id = 10;
export const ids = [10];
export const modules = {
  38532: (bb, ab, Ub) => {
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
          Eb && "Mesh" === Ab.getEntityType(Eb) && ("Permanent Upgrades" === Ab.getEntityName(Eb) ? Ab.openShop(bb, !1, "Upgrades") : "Items" === Ab.getEntityName(Eb) ? Ab.openShop(bb, !1, "Items") : "Prestige" === Ab.getEntityName(Eb) && Ab.openShop(bb, !1, "Prestige"))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);