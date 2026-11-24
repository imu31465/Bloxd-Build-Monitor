export const id = 354;
export const ids = [354];
export const modules = {
  61353: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      WorldCodeAiOutOfUsage: () => am
    });
    var hm = fm(1454),
      Am = fm(1135);

    function am(mm) {
      let {
        onGetSuperRank: Tm
      } = mm;
      return (0, Am.jsxs)("div", {
        className: "WorldCodeAiOutOfUsage",
        children: [(0, Am.jsx)("p", {
          className: "WorldCodeAiOutOfUsageText",
          children: "You don't have any Super Bot.xd usage left - use Bot.xd or get Super Rank for more usage!"
        }), (0, Am.jsx)(hm.m, {
          className: "WorldCodeAiOutOfUsageButton",
          onClick: Tm,
          children: "Get Super Rank"
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);