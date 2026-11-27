export const id = 672;
export const ids = [672];
export const modules = {
  64422: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      WorldCodeAiOutOfUsage: () => LW
    });
    var mW = OW(1172),
      EW = OW(3210),
      NW = OW(1532),
      PW = OW(1283);

    function LW(WW) {
      let {
        onGetSuperRank: iW
      } = WW;
      const {
        t: OW
      } = (0, mW.B)(), LW = (0, EW.o)(Date.now()), cW = OW(LW.nameKey);
      return (0, PW.jsxs)("div", {
        className: "WorldCodeAiOutOfUsage",
        children: [(0, PW.jsx)("p", {
          className: "WorldCodeAiOutOfUsageText",
          children: `You don't have any Super Bot.xd usage left - use Bot.xd or get ${cW} for more usage!`
        }), (0, PW.jsx)(NW.n, {
          className: "WorldCodeAiOutOfUsageButton",
          onClick: iW,
          children: OW(LW.getKey)
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);