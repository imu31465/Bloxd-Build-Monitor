export const id = 13;
export const ids = [13];
export const modules = {
  37921: (yb, bb, Wy) => {
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
          Zy && "Mesh" === Uy.getEntityType(Zy) && "Quartermaster" === Uy.getEntityName(Zy) && Uy.openShop(yb, !1, "Armoury")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);