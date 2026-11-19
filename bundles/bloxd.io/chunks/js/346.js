export const id = 346;
export const ids = [346];
export const modules = {
  60237: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      WorldCodeAiOutOfUsage: () => IY
    });
    var FY = DY(1437),
      AY = DY(1125);

    function IY(YY) {
      let {
        onGetSuperRank: rY
      } = YY;
      return (0, AY.jsxs)("div", {
        className: "WorldCodeAiOutOfUsage",
        children: [(0, AY.jsx)("p", {
          className: "WorldCodeAiOutOfUsageText",
          children: "You don't have any Super Bot.xd usage left - use Bot.xd or get Super Rank for more usage!"
        }), (0, AY.jsx)(FY.n, {
          className: "WorldCodeAiOutOfUsageButton",
          onClick: rY,
          children: "Get Super Rank"
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);