export const id = 673;
export const ids = [673];
export const modules = {
  64438: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      WorldCodeAiOutOfUsage: () => gb
    });
    var eb = Mb(1259),
      Hb = Mb(3357),
      pb = Mb(1616),
      Vb = Mb(1364);

    function gb(bb) {
      let {
        onGetSuperRank: wb
      } = bb;
      const {
        t: Mb
      } = (0, eb.C)(), gb = (0, Hb.s)(Date.now()), lb = Mb(gb.nameKey);
      return (0, Vb.jsxs)("div", {
        className: "WorldCodeAiOutOfUsage",
        children: [(0, Vb.jsx)("p", {
          className: "WorldCodeAiOutOfUsageText",
          children: `You don't have any Super Bot.xd usage left - use Bot.xd or get ${lb} for more usage!`
        }), (0, Vb.jsx)(pb.p, {
          className: "WorldCodeAiOutOfUsageButton",
          onClick: wb,
          children: Mb(gb.getKey)
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);