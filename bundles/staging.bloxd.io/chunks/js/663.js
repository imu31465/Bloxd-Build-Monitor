export const id = 663;
export const ids = [663];
export const modules = {
  64323: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      WorldCodeAiOutOfUsage: () => UV
    });
    var JV = xV(1551),
      YV = xV(1321);

    function UV(VV) {
      let {
        onGetSuperRank: eV
      } = VV;
      return (0, YV.jsxs)("div", {
        className: "WorldCodeAiOutOfUsage",
        children: [(0, YV.jsx)("p", {
          className: "WorldCodeAiOutOfUsageText",
          children: "You don't have any Super Bot.xd usage left - use Bot.xd or get Super Rank for more usage!"
        }), (0, YV.jsx)(JV.m, {
          className: "WorldCodeAiOutOfUsageButton",
          onClick: eV,
          children: "Get Super Rank"
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);