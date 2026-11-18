export const id = 23;
export const ids = [23];
export const modules = {
  38149: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      default: () => Uy
    });
    const Uy = function(yb, bb, Wy) {
      let Uy;
      return {
        onCreate: yb => {
          Uy = yb
        },
        onPlayerAltAction: (yb, bb, Wy, hy, fy, Zy) => {
          null !== Zy && "Mesh" === Uy.getEntityType(Zy) && "Weaponmaster" === Uy.getEntityName(Zy) && Uy.openShop(yb, !1, "PvpCivWeapon")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);