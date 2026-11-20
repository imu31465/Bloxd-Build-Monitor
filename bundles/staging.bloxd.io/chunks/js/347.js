export const id = 347;
export const ids = [347];
export const modules = {
  60582: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      WorldCodeAiOutOfUsage: () => KT
    });
    var lT = cT(1470),
      MT = cT(1099);

    function KT(TT) {
      let {
        onGetSuperRank: kT
      } = TT;
      return (0, MT.jsxs)("div", {
        className: "WorldCodeAiOutOfUsage",
        children: [(0, MT.jsx)("p", {
          className: "WorldCodeAiOutOfUsageText",
          children: "You don't have any Super Bot.xd usage left - use Bot.xd or get Super Rank for more usage!"
        }), (0, MT.jsx)(lT.m, {
          className: "WorldCodeAiOutOfUsageButton",
          onClick: kT,
          children: "Get Super Rank"
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);