export const id = 23;
export const ids = [23];
export const modules = {
  38772: (bb, ab, Ub) => {
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
          null !== Eb && "Mesh" === Ab.getEntityType(Eb) && "Weaponmaster" === Ab.getEntityName(Eb) && Ab.openShop(bb, !1, "PvpCivWeapon")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);