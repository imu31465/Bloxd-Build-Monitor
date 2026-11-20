export const id = 347;
export const ids = [347];
export const modules = {
  60604: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      WorldCodeAiOutOfUsage: () => ev
    });
    var hv = Pv(1442),
      Sv = Pv(1082);

    function ev(vv) {
      let {
        onGetSuperRank: zv
      } = vv;
      return (0, Sv.jsxs)("div", {
        className: "WorldCodeAiOutOfUsage",
        children: [(0, Sv.jsx)("p", {
          className: "WorldCodeAiOutOfUsageText",
          children: "You don't have any Super Bot.xd usage left - use Bot.xd or get Super Rank for more usage!"
        }), (0, Sv.jsx)(hv.j, {
          className: "WorldCodeAiOutOfUsageButton",
          onClick: zv,
          children: "Get Super Rank"
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);