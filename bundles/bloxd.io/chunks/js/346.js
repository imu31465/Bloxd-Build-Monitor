export const id = 346;
export const ids = [346];
export const modules = {
  60415: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      WorldCodeAiOutOfUsage: () => iD
    });
    var ID = cD(1442),
      pD = cD(1093);

    function iD(DD) {
      let {
        onGetSuperRank: CD
      } = DD;
      return (0, pD.jsxs)("div", {
        className: "WorldCodeAiOutOfUsage",
        children: [(0, pD.jsx)("p", {
          className: "WorldCodeAiOutOfUsageText",
          children: "You don't have any Super Bot.xd usage left - use Bot.xd or get Super Rank for more usage!"
        }), (0, pD.jsx)(ID.o, {
          className: "WorldCodeAiOutOfUsageButton",
          onClick: CD,
          children: "Get Super Rank"
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);