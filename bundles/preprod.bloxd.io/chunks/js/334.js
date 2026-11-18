export const id = 334;
export const ids = [334];
export const modules = {
  59715: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      WorldCodeAiOutOfUsage: () => fy
    });
    var Uy = Wy(1273),
      hy = Wy(952);

    function fy(yb) {
      let {
        onGetSuperRank: bb
      } = yb;
      return (0, hy.jsxs)("div", {
        className: "WorldCodeAiOutOfUsage",
        children: [(0, hy.jsx)("p", {
          className: "WorldCodeAiOutOfUsageText",
          children: "You don't have any Super Bot.xd usage left - use Bot.xd or get Super Rank for more usage!"
        }), (0, hy.jsx)(Uy.i, {
          className: "WorldCodeAiOutOfUsageButton",
          onClick: bb,
          children: "Get Super Rank"
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);