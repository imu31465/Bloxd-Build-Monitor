export const id = 359;
export const ids = [359];
export const modules = {
  61324: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      WorldCodeAiOutOfUsage: () => oB
    });
    var TB = ZB(1516),
      JB = ZB(1153);

    function oB(BB) {
      let {
        onGetSuperRank: IB
      } = BB;
      return (0, JB.jsxs)("div", {
        className: "WorldCodeAiOutOfUsage",
        children: [(0, JB.jsx)("p", {
          className: "WorldCodeAiOutOfUsageText",
          children: "You don't have any Super Bot.xd usage left - use Bot.xd or get Super Rank for more usage!"
        }), (0, JB.jsx)(TB.p, {
          className: "WorldCodeAiOutOfUsageButton",
          onClick: IB,
          children: "Get Super Rank"
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);