export const id = 673;
export const ids = [673];
export const modules = {
  64799: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      WorldCodeAiOutOfUsage: () => Kd
    });
    var Wd = md(1238),
      Fd = md(3277),
      Rd = md(1572),
      Xd = md(1341);

    function Kd(dd) {
      let {
        onGetSuperRank: Od
      } = dd;
      const {
        t: md
      } = (0, Wd.G)(), Kd = (0, Fd.v)(Date.now()), hd = md(Kd.nameKey);
      return (0, Xd.jsxs)("div", {
        className: "WorldCodeAiOutOfUsage",
        children: [(0, Xd.jsx)("p", {
          className: "WorldCodeAiOutOfUsageText",
          children: `You don't have any Super Bot.xd usage left - use Bot.xd or get ${hd} for more usage!`
        }), (0, Xd.jsx)(Rd.m, {
          className: "WorldCodeAiOutOfUsageButton",
          onClick: Od,
          children: md(Kd.getKey)
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);