export const id = 346;
export const ids = [346];
export const modules = {
  60351: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      WorldCodeAiOutOfUsage: () => iz
    });
    var Ez = bz(1419),
      nz = bz(1089);

    function iz(zz) {
      let {
        onGetSuperRank: uz
      } = zz;
      return (0, nz.jsxs)("div", {
        className: "WorldCodeAiOutOfUsage",
        children: [(0, nz.jsx)("p", {
          className: "WorldCodeAiOutOfUsageText",
          children: "You don't have any Super Bot.xd usage left - use Bot.xd or get Super Rank for more usage!"
        }), (0, nz.jsx)(Ez.q, {
          className: "WorldCodeAiOutOfUsageButton",
          onClick: uz,
          children: "Get Super Rank"
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);