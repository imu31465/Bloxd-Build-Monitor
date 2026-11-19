export const id = 346;
export const ids = [346];
export const modules = {
  60034: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      WorldCodeAiOutOfUsage: () => kT
    });
    var iT = IT(1408),
      zT = IT(1083);

    function kT(TT) {
      let {
        onGetSuperRank: oT
      } = TT;
      return (0, zT.jsxs)("div", {
        className: "WorldCodeAiOutOfUsage",
        children: [(0, zT.jsx)("p", {
          className: "WorldCodeAiOutOfUsageText",
          children: "You don't have any Super Bot.xd usage left - use Bot.xd or get Super Rank for more usage!"
        }), (0, zT.jsx)(iT.m, {
          className: "WorldCodeAiOutOfUsageButton",
          onClick: oT,
          children: "Get Super Rank"
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);