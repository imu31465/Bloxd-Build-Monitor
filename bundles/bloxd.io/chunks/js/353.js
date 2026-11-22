export const id = 353;
export const ids = [353];
export const modules = {
  60696: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      WorldCodeAiOutOfUsage: () => Sk
    });
    var Dk = ik(1410),
      fk = ik(1066);

    function Sk(kk) {
      let {
        onGetSuperRank: ek
      } = kk;
      return (0, fk.jsxs)("div", {
        className: "WorldCodeAiOutOfUsage",
        children: [(0, fk.jsx)("p", {
          className: "WorldCodeAiOutOfUsageText",
          children: "You don't have any Super Bot.xd usage left - use Bot.xd or get Super Rank for more usage!"
        }), (0, fk.jsx)(Dk.r, {
          className: "WorldCodeAiOutOfUsageButton",
          onClick: ek,
          children: "Get Super Rank"
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);