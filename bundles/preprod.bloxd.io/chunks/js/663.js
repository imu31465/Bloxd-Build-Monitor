export const id = 663;
export const ids = [663];
export const modules = {
  63929: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      WorldCodeAiOutOfUsage: () => jM
    });
    var OM = iM(1520),
      SM = iM(1303);

    function jM(MM) {
      let {
        onGetSuperRank: rM
      } = MM;
      return (0, SM.jsxs)("div", {
        className: "WorldCodeAiOutOfUsage",
        children: [(0, SM.jsx)("p", {
          className: "WorldCodeAiOutOfUsageText",
          children: "You don't have any Super Bot.xd usage left - use Bot.xd or get Super Rank for more usage!"
        }), (0, SM.jsx)(OM.p, {
          className: "WorldCodeAiOutOfUsageButton",
          onClick: rM,
          children: "Get Super Rank"
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);