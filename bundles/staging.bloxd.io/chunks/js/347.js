export const id = 347;
export const ids = [347];
export const modules = {
  60669: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      WorldCodeAiOutOfUsage: () => oQ
    });
    var LQ = wQ(1451),
      qQ = wQ(1107);

    function oQ(QQ) {
      let {
        onGetSuperRank: FQ
      } = QQ;
      return (0, qQ.jsxs)("div", {
        className: "WorldCodeAiOutOfUsage",
        children: [(0, qQ.jsx)("p", {
          className: "WorldCodeAiOutOfUsageText",
          children: "You don't have any Super Bot.xd usage left - use Bot.xd or get Super Rank for more usage!"
        }), (0, qQ.jsx)(LQ.m, {
          className: "WorldCodeAiOutOfUsageButton",
          onClick: FQ,
          children: "Get Super Rank"
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);