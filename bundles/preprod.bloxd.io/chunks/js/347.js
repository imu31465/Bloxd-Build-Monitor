export const id = 347;
export const ids = [347];
export const modules = {
  61153: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      WorldCodeAiOutOfUsage: () => Oq
    });
    var Yq = gq(1422),
      lq = gq(1070);

    function Oq(qq) {
      let {
        onGetSuperRank: Eq
      } = qq;
      return (0, lq.jsxs)("div", {
        className: "WorldCodeAiOutOfUsage",
        children: [(0, lq.jsx)("p", {
          className: "WorldCodeAiOutOfUsageText",
          children: "You don't have any Super Bot.xd usage left - use Bot.xd or get Super Rank for more usage!"
        }), (0, lq.jsx)(Yq.p, {
          className: "WorldCodeAiOutOfUsageButton",
          onClick: Eq,
          children: "Get Super Rank"
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);