export const id = 326;
export const ids = [326];
export const modules = {
  58607: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      WorldCodeAiOutOfUsage: () => zR
    });
    var wW = MW(1255),
      CW = MW(940);

    function zR(WW) {
      let {
        onGetSuperRank: RW
      } = WW;
      return (0, CW.jsxs)("div", {
        className: "WorldCodeAiOutOfUsage",
        children: [(0, CW.jsx)("p", {
          className: "WorldCodeAiOutOfUsageText",
          children: "You don't have any Super Bot.xd usage left - use Bot.xd or get Super Rank for more usage!"
        }), (0, CW.jsx)(wW.m, {
          className: "WorldCodeAiOutOfUsageButton",
          onClick: RW,
          children: "Get Super Rank"
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);