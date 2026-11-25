export const id = 359;
export const ids = [359];
export const modules = {
  61546: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      WorldCodeAiOutOfUsage: () => Dt
    });
    var Ot = Vt(1556),
      qt = Vt(1188);

    function Dt(tt) {
      let {
        onGetSuperRank: et
      } = tt;
      return (0, qt.jsxs)("div", {
        className: "WorldCodeAiOutOfUsage",
        children: [(0, qt.jsx)("p", {
          className: "WorldCodeAiOutOfUsageText",
          children: "You don't have any Super Bot.xd usage left - use Bot.xd or get Super Rank for more usage!"
        }), (0, qt.jsx)(Ot.m, {
          className: "WorldCodeAiOutOfUsageButton",
          onClick: et,
          children: "Get Super Rank"
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);