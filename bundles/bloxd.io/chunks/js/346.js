export const id = 346;
export const ids = [346];
export const modules = {
  60936: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      WorldCodeAiOutOfUsage: () => ak
    });
    var Rk = Bk(1389),
      tk = Bk(1069);

    function ak(kk) {
      let {
        onGetSuperRank: Fk
      } = kk;
      return (0, tk.jsxs)("div", {
        className: "WorldCodeAiOutOfUsage",
        children: [(0, tk.jsx)("p", {
          className: "WorldCodeAiOutOfUsageText",
          children: "You don't have any Super Bot.xd usage left - use Bot.xd or get Super Rank for more usage!"
        }), (0, tk.jsx)(Rk.o, {
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