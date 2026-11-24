export const id = 354;
export const ids = [354];
export const modules = {
  61347: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      WorldCodeAiOutOfUsage: () => XS
    });
    var tS = gS(1528),
      bS = gS(1181);

    function XS(SS) {
      let {
        onGetSuperRank: HS
      } = SS;
      return (0, bS.jsxs)("div", {
        className: "WorldCodeAiOutOfUsage",
        children: [(0, bS.jsx)("p", {
          className: "WorldCodeAiOutOfUsageText",
          children: "You don't have any Super Bot.xd usage left - use Bot.xd or get Super Rank for more usage!"
        }), (0, bS.jsx)(tS.p, {
          className: "WorldCodeAiOutOfUsageButton",
          onClick: HS,
          children: "Get Super Rank"
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);