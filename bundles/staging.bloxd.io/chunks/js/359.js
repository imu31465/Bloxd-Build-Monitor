export const id = 359;
export const ids = [359];
export const modules = {
  61525: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      WorldCodeAiOutOfUsage: () => Zu
    });
    var su = ju(1506),
      Uu = ju(1154);

    function Zu(uu) {
      let {
        onGetSuperRank: Eu
      } = uu;
      return (0, Uu.jsxs)("div", {
        className: "WorldCodeAiOutOfUsage",
        children: [(0, Uu.jsx)("p", {
          className: "WorldCodeAiOutOfUsageText",
          children: "You don't have any Super Bot.xd usage left - use Bot.xd or get Super Rank for more usage!"
        }), (0, Uu.jsx)(su.p, {
          className: "WorldCodeAiOutOfUsageButton",
          onClick: Eu,
          children: "Get Super Rank"
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);