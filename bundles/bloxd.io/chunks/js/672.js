export const id = 672;
export const ids = [672];
export const modules = {
  64159: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      WorldCodeAiOutOfUsage: () => qR
    });
    var yR = GR(1270),
      tR = GR(3314),
      uR = GR(1590),
      ZR = GR(1378);

    function qR(RR) {
      let {
        onGetSuperRank: JR
      } = RR;
      const {
        t: GR
      } = (0, yR.A)(), qR = (0, tR.s)(Date.now()), iR = GR(qR.nameKey);
      return (0, ZR.jsxs)("div", {
        className: "WorldCodeAiOutOfUsage",
        children: [(0, ZR.jsx)("p", {
          className: "WorldCodeAiOutOfUsageText",
          children: `You don't have any Super Bot.xd usage left - use Bot.xd or get ${iR} for more usage!`
        }), (0, ZR.jsx)(uR.n, {
          className: "WorldCodeAiOutOfUsageButton",
          onClick: JR,
          children: GR(qR.getKey)
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);