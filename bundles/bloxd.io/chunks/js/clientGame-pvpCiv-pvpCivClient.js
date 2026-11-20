export const id = 23;
export const ids = [23];
export const modules = {
  39116: (bb, cb, sb) => {
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
          null !== Tb && "Mesh" === kb.getEntityType(Tb) && "Weaponmaster" === kb.getEntityName(Tb) && kb.openShop(bb, !1, "PvpCivWeapon")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);