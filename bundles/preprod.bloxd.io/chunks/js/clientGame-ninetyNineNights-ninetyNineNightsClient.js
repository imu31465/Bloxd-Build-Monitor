export const id = 20;
export const ids = [20];
export const modules = {
  38064: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      default: () => hy
    });
    var Uy = Wy(23);
    const hy = function(yb, bb, Wy) {
      let hy;
      return {
        onCreate: yb => {
          hy = yb
        },
        onPlayerClick: (yb, bb, Wy, fy, Zy, cb) => {
          bb || "Workbench" !== hy.getMetaInfo(cb).rootName || Uy.g.EZ("toggleMenu", "inventory|Workbench")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);