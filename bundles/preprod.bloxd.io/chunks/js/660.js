export const id = 660;
export const ids = [660];
export const modules = {
  63977: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      WorldCodeAiOutOfUsage: () => QU
    });
    var cU = zU(1494),
      yU = zU(1305);

    function QU(UU) {
      let {
        onGetSuperRank: XU
      } = UU;
      return (0, yU.jsxs)("div", {
        className: "WorldCodeAiOutOfUsage",
        children: [(0, yU.jsx)("p", {
          className: "WorldCodeAiOutOfUsageText",
          children: "You don't have any Super Bot.xd usage left - use Bot.xd or get Super Rank for more usage!"
        }), (0, yU.jsx)(cU.l, {
          className: "WorldCodeAiOutOfUsageButton",
          onClick: XU,
          children: "Get Super Rank"
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);