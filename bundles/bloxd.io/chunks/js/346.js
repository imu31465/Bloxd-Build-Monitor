export const id = 346;
export const ids = [346];
export const modules = {
  61027: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      WorldCodeAiOutOfUsage: () => Qu
    });
    var Eu = yu(1408),
      Ku = yu(1079);

    function Qu(uu) {
      let {
        onGetSuperRank: Ru
      } = uu;
      return (0, Ku.jsxs)("div", {
        className: "WorldCodeAiOutOfUsage",
        children: [(0, Ku.jsx)("p", {
          className: "WorldCodeAiOutOfUsageText",
          children: "You don't have any Super Bot.xd usage left - use Bot.xd or get Super Rank for more usage!"
        }), (0, Ku.jsx)(Eu.l, {
          className: "WorldCodeAiOutOfUsageButton",
          onClick: Ru,
          children: "Get Super Rank"
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);