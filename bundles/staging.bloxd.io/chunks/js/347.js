export const id = 347;
export const ids = [347];
export const modules = {
  60614: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      WorldCodeAiOutOfUsage: () => Gb
    });
    var Bb = hb(1357),
      Ob = hb(1007);

    function Gb(bb) {
      let {
        onGetSuperRank: ub
      } = bb;
      return (0, Ob.jsxs)("div", {
        className: "WorldCodeAiOutOfUsage",
        children: [(0, Ob.jsx)("p", {
          className: "WorldCodeAiOutOfUsageText",
          children: "You don't have any Super Bot.xd usage left - use Bot.xd or get Super Rank for more usage!"
        }), (0, Ob.jsx)(Bb.m, {
          className: "WorldCodeAiOutOfUsageButton",
          onClick: ub,
          children: "Get Super Rank"
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);