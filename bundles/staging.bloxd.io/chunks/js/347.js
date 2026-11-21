export const id = 347;
export const ids = [347];
export const modules = {
  60901: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      WorldCodeAiOutOfUsage: () => Wd
    });
    var pd = kd(1461),
      Nd = kd(1103);

    function Wd(dd) {
      let {
        onGetSuperRank: Jd
      } = dd;
      return (0, Nd.jsxs)("div", {
        className: "WorldCodeAiOutOfUsage",
        children: [(0, Nd.jsx)("p", {
          className: "WorldCodeAiOutOfUsageText",
          children: "You don't have any Super Bot.xd usage left - use Bot.xd or get Super Rank for more usage!"
        }), (0, Nd.jsx)(pd.j, {
          className: "WorldCodeAiOutOfUsageButton",
          onClick: Jd,
          children: "Get Super Rank"
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);