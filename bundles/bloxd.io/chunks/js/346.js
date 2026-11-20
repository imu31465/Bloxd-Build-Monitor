export const id = 346;
export const ids = [346];
export const modules = {
  60602: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      WorldCodeAiOutOfUsage: () => ab
    });
    var kb = sb(1431),
      Wb = sb(1087);

    function ab(bb) {
      let {
        onGetSuperRank: cb
      } = bb;
      return (0, Wb.jsxs)("div", {
        className: "WorldCodeAiOutOfUsage",
        children: [(0, Wb.jsx)("p", {
          className: "WorldCodeAiOutOfUsageText",
          children: "You don't have any Super Bot.xd usage left - use Bot.xd or get Super Rank for more usage!"
        }), (0, Wb.jsx)(kb.n, {
          className: "WorldCodeAiOutOfUsageButton",
          onClick: cb,
          children: "Get Super Rank"
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);