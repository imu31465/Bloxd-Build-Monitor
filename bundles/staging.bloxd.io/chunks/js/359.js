export const id = 359;
export const ids = [359];
export const modules = {
  61838: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      WorldCodeAiOutOfUsage: () => LG
    });
    var wG = ZG(1393),
      SG = ZG(1067);

    function LG(GG) {
      let {
        onGetSuperRank: bG
      } = GG;
      return (0, SG.jsxs)("div", {
        className: "WorldCodeAiOutOfUsage",
        children: [(0, SG.jsx)("p", {
          className: "WorldCodeAiOutOfUsageText",
          children: "You don't have any Super Bot.xd usage left - use Bot.xd or get Super Rank for more usage!"
        }), (0, SG.jsx)(wG.k, {
          className: "WorldCodeAiOutOfUsageButton",
          onClick: bG,
          children: "Get Super Rank"
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);