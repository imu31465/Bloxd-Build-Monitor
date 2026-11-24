export const id = 359;
export const ids = [359];
export const modules = {
  61399: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      WorldCodeAiOutOfUsage: () => Ip
    });
    var Op = cp(1480),
      op = cp(1112);

    function Ip(pp) {
      let {
        onGetSuperRank: ip
      } = pp;
      return (0, op.jsxs)("div", {
        className: "WorldCodeAiOutOfUsage",
        children: [(0, op.jsx)("p", {
          className: "WorldCodeAiOutOfUsageText",
          children: "You don't have any Super Bot.xd usage left - use Bot.xd or get Super Rank for more usage!"
        }), (0, op.jsx)(Op.o, {
          className: "WorldCodeAiOutOfUsageButton",
          onClick: ip,
          children: "Get Super Rank"
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);