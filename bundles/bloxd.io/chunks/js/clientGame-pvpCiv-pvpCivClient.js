export const id = 23;
export const ids = [23];
export const modules = {
  39141: (bb, ub, hb) => {
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
          null !== Ub && "Mesh" === Bb.getEntityType(Ub) && "Weaponmaster" === Bb.getEntityName(Ub) && Bb.openShop(bb, !1, "PvpCivWeapon")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);