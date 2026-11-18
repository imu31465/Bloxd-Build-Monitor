export const id = 336;
export const ids = [336];
export const modules = {
  59743: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      WorldCodeAiOutOfUsage: () => pB
    });
    var VB = dB(1324),
      yB = dB(980);

    function pB(BB) {
      let {
        onGetSuperRank: TB
      } = BB;
      return (0, yB.jsxs)("div", {
        className: "WorldCodeAiOutOfUsage",
        children: [(0, yB.jsx)("p", {
          className: "WorldCodeAiOutOfUsageText",
          children: "You don't have any Super Bot.xd usage left - use Bot.xd or get Super Rank for more usage!"
        }), (0, yB.jsx)(VB.k, {
          className: "WorldCodeAiOutOfUsageButton",
          onClick: TB,
          children: "Get Super Rank"
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);