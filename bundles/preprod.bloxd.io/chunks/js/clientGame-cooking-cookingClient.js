export const id = 15;
export const ids = [15];
export const modules = {
  38044: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      default: () => hy
    });
    const Uy = [
        [25, 8, 56],
        [25, 8, 54]
      ],
      hy = function(yb, bb, Wy) {
        let hy;
        return {
          onCreate: yb => {
            hy = yb
          },
          onPlayerAltAction: (yb, bb, Wy, fy, Zy, cb) => {
            Uy.some((yb => yb[0] === bb && yb[2] === fy)) && hy.openShop(yb, !1)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);