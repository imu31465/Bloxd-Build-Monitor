export const id = 346;
export const ids = [346];
export const modules = {
  60550: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      WorldCodeAiOutOfUsage: () => EU
    });
    var tU = gU(1412),
      pU = gU(1090);

    function EU(UU) {
      let {
        onGetSuperRank: RU
      } = UU;
      return (0, pU.jsxs)("div", {
        className: "WorldCodeAiOutOfUsage",
        children: [(0, pU.jsx)("p", {
          className: "WorldCodeAiOutOfUsageText",
          children: "You don't have any Super Bot.xd usage left - use Bot.xd or get Super Rank for more usage!"
        }), (0, pU.jsx)(tU.j, {
          className: "WorldCodeAiOutOfUsageButton",
          onClick: RU,
          children: "Get Super Rank"
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);