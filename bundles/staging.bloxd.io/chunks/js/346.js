export const id = 346;
export const ids = [346];
export const modules = {
  60339: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      WorldCodeAiOutOfUsage: () => Xz
    });
    var Fz = sz(1419),
      Wz = sz(1087);

    function Xz(zz) {
      let {
        onGetSuperRank: tz
      } = zz;
      return (0, Wz.jsxs)("div", {
        className: "WorldCodeAiOutOfUsage",
        children: [(0, Wz.jsx)("p", {
          className: "WorldCodeAiOutOfUsageText",
          children: "You don't have any Super Bot.xd usage left - use Bot.xd or get Super Rank for more usage!"
        }), (0, Wz.jsx)(Fz.p, {
          className: "WorldCodeAiOutOfUsageButton",
          onClick: tz,
          children: "Get Super Rank"
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);