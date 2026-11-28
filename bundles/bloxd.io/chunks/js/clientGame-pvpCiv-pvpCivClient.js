export const id = 27;
export const ids = [27];
export const modules = {
  41001: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      default: () => eb
    });
    const eb = function(bb, wb, Mb) {
      let eb;
      return {
        onCreate: bb => {
          eb = bb
        },
        onPlayerAltAction: (bb, wb, Mb, Hb, pb, Vb) => {
          null !== Vb && "Mesh" === eb.getEntityType(Vb) && "Weaponmaster" === eb.getEntityName(Vb) && eb.openShop(bb, !1, "PvpCivWeapon")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);