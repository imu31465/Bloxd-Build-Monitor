export const id = 10;
export const ids = [10];
export const modules = {
  37912: (yb, bb, Wy) => {
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
          Zy && "Mesh" === Uy.getEntityType(Zy) && ("Permanent Upgrades" === Uy.getEntityName(Zy) ? Uy.openShop(yb, !1, "Upgrades") : "Items" === Uy.getEntityName(Zy) ? Uy.openShop(yb, !1, "Items") : "Prestige" === Uy.getEntityName(Zy) && Uy.openShop(yb, !1, "Prestige"))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);