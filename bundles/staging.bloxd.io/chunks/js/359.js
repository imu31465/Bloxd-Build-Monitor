export const id = 359;
export const ids = [359];
export const modules = {
  61168: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      WorldCodeAiOutOfUsage: () => MT
    });
    var WT = mT(1569),
      zT = mT(1188);

    function MT(TT) {
      let {
        onGetSuperRank: UT
      } = TT;
      return (0, zT.jsxs)("div", {
        className: "WorldCodeAiOutOfUsage",
        children: [(0, zT.jsx)("p", {
          className: "WorldCodeAiOutOfUsageText",
          children: "You don't have any Super Bot.xd usage left - use Bot.xd or get Super Rank for more usage!"
        }), (0, zT.jsx)(WT.l, {
          className: "WorldCodeAiOutOfUsageButton",
          onClick: UT,
          children: "Get Super Rank"
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);