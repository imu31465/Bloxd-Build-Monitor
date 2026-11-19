export const id = 23;
export const ids = [23];
export const modules = {
  38456: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      default: () => iT
    });
    const iT = function(TT, oT, IT) {
      let iT;
      return {
        onCreate: TT => {
          iT = TT
        },
        onPlayerAltAction: (TT, oT, IT, zT, kT, WT) => {
          null !== WT && "Mesh" === iT.getEntityType(WT) && "Weaponmaster" === iT.getEntityName(WT) && iT.openShop(TT, !1, "PvpCivWeapon")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);