export const id = 346;
export const ids = [346];
export const modules = {
  60270: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      WorldCodeAiOutOfUsage: () => Tb
    });
    var Ab = Ub(1352),
      Mb = Ub(1023);

    function Tb(bb) {
      let {
        onGetSuperRank: ab
      } = bb;
      return (0, Mb.jsxs)("div", {
        className: "WorldCodeAiOutOfUsage",
        children: [(0, Mb.jsx)("p", {
          className: "WorldCodeAiOutOfUsageText",
          children: "You don't have any Super Bot.xd usage left - use Bot.xd or get Super Rank for more usage!"
        }), (0, Mb.jsx)(Ab.m, {
          className: "WorldCodeAiOutOfUsageButton",
          onClick: ab,
          children: "Get Super Rank"
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);