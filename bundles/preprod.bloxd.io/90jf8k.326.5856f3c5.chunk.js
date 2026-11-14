export const id = 326;
export const ids = [326];
export const modules = {
  58921: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      WorldCodeAiOutOfUsage: () => uF
    });
    var CF = SF(1266),
      AF = SF(971);

    function uF(FF) {
      let {
        onGetSuperRank: WF
      } = FF;
      return (0, AF.jsxs)("div", {
        className: "WorldCodeAiOutOfUsage",
        children: [(0, AF.jsx)("p", {
          className: "WorldCodeAiOutOfUsageText",
          children: "You don't have any Super Bot.xd usage left - use Bot.xd or get Super Rank for more usage!"
        }), (0, AF.jsx)(CF.k, {
          className: "WorldCodeAiOutOfUsageButton",
          onClick: WF,
          children: "Get Super Rank"
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);