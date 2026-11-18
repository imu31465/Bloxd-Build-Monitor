export const id = 16;
export const ids = [16];
export const modules = {
  38048: (yb, bb, Wy) => {
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
          Zy && "Mesh" === Uy.getEntityType(Zy) && Uy.openShop(yb, !0)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);