export const id = 354;
export const ids = [354];
export const modules = {
  61295: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      WorldCodeAiOutOfUsage: () => ik
    });
    var Xk = Ik(1406),
      Tk = Ik(1096);

    function ik(kk) {
      let {
        onGetSuperRank: Fk
      } = kk;
      return (0, Tk.jsxs)("div", {
        className: "WorldCodeAiOutOfUsage",
        children: [(0, Tk.jsx)("p", {
          className: "WorldCodeAiOutOfUsageText",
          children: "You don't have any Super Bot.xd usage left - use Bot.xd or get Super Rank for more usage!"
        }), (0, Tk.jsx)(Xk.m, {
          className: "WorldCodeAiOutOfUsageButton",
          onClick: Fk,
          children: "Get Super Rank"
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);