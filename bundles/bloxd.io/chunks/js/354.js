export const id = 354;
export const ids = [354];
export const modules = {
  61051: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      WorldCodeAiOutOfUsage: () => KD
    });
    var pD = wD(1447),
      sD = wD(1096);

    function KD(DD) {
      let {
        onGetSuperRank: zD
      } = DD;
      return (0, sD.jsxs)("div", {
        className: "WorldCodeAiOutOfUsage",
        children: [(0, sD.jsx)("p", {
          className: "WorldCodeAiOutOfUsageText",
          children: "You don't have any Super Bot.xd usage left - use Bot.xd or get Super Rank for more usage!"
        }), (0, sD.jsx)(pD.o, {
          className: "WorldCodeAiOutOfUsageButton",
          onClick: zD,
          children: "Get Super Rank"
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);