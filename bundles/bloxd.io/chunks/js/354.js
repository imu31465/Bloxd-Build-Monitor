export const id = 354;
export const ids = [354];
export const modules = {
  60953: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      WorldCodeAiOutOfUsage: () => bC
    });
    var QC = ZC(1388),
      wC = ZC(1056);

    function bC(CC) {
      let {
        onGetSuperRank: zC
      } = CC;
      return (0, wC.jsxs)("div", {
        className: "WorldCodeAiOutOfUsage",
        children: [(0, wC.jsx)("p", {
          className: "WorldCodeAiOutOfUsageText",
          children: "You don't have any Super Bot.xd usage left - use Bot.xd or get Super Rank for more usage!"
        }), (0, wC.jsx)(QC.o, {
          className: "WorldCodeAiOutOfUsageButton",
          onClick: zC,
          children: "Get Super Rank"
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);