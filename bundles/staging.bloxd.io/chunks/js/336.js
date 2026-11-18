export const id = 336;
export const ids = [336];
export const modules = {
  59418: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      WorldCodeAiOutOfUsage: () => eJ
    });
    var FJ = ZJ(1329),
      UJ = ZJ(990);

    function eJ(JJ) {
      let {
        onGetSuperRank: cJ
      } = JJ;
      return (0, UJ.jsxs)("div", {
        className: "WorldCodeAiOutOfUsage",
        children: [(0, UJ.jsx)("p", {
          className: "WorldCodeAiOutOfUsageText",
          children: "You don't have any Super Bot.xd usage left - use Bot.xd or get Super Rank for more usage!"
        }), (0, UJ.jsx)(FJ.m, {
          className: "WorldCodeAiOutOfUsageButton",
          onClick: cJ,
          children: "Get Super Rank"
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);