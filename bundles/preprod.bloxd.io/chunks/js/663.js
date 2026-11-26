export const id = 663;
export const ids = [663];
export const modules = {
  64126: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      WorldCodeAiOutOfUsage: () => tH
    });
    var AH = LH(1123),
      rH = LH(2486),
      SH = LH(1455),
      hH = LH(1225);

    function tH(HH) {
      let {
        onGetSuperRank: BH
      } = HH;
      const {
        t: LH
      } = (0, AH.B)(), tH = (0, rH.u)(Date.now()), zH = LH(tH.nameKey);
      return (0, hH.jsxs)("div", {
        className: "WorldCodeAiOutOfUsage",
        children: [(0, hH.jsx)("p", {
          className: "WorldCodeAiOutOfUsageText",
          children: `You don't have any Super Bot.xd usage left - use Bot.xd or get ${zH} for more usage!`
        }), (0, hH.jsx)(SH.u, {
          className: "WorldCodeAiOutOfUsageButton",
          onClick: BH,
          children: LH(tH.getKey)
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);