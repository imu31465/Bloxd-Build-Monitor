export const id = 24;
export const ids = [24];
export const modules = {
  38151: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      default: () => Uy
    });
    const Uy = function() {
      let yb;
      return {
        onCreate: bb => {
          yb = bb
        },
        onPlayerAltAction: (bb, Wy, Uy, hy, fy, Zy) => {
          if (!Zy || "Mesh" !== yb.getEntityType(Zy)) return;
          const cb = yb.getEntityName(Zy);
          "Perks" === cb ? yb.openShop(bb, !1, "Perks") : "Returning Bonus" === cb && yb.openShop(bb, !1, "Returning Player Bonus")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);