export const id = 331;
export const ids = [331];
export const modules = {
  59111: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      WorldCodeAiOutOfUsage: () => rB
    });
    var Vc = nc(1255),
      Ic = nc(957);

    function rB(cB) {
      let {
        onGetSuperRank: Bc
      } = cB;
      return (0, Ic.jsxs)("div", {
        className: "WorldCodeAiOutOfUsage",
        children: [(0, Ic.jsx)("p", {
          className: "WorldCodeAiOutOfUsageText",
          children: "You don't have any Super Bot.xd usage left - use Bot.xd or get Super Rank for more usage!"
        }), (0, Ic.jsx)(Vc.n, {
          className: "WorldCodeAiOutOfUsageButton",
          onClick: Bc,
          children: "Get Super Rank"
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);