export const id = 363;
export const ids = [363];
export const modules = {
  61556: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      WorldCodeAiOutOfUsage: () => TQ
    });
    var wQ = XQ(1507),
      qQ = XQ(1145);

    function TQ(QQ) {
      let {
        onGetSuperRank: WQ
      } = QQ;
      return (0, qQ.jsxs)("div", {
        className: "WorldCodeAiOutOfUsage",
        children: [(0, qQ.jsx)("p", {
          className: "WorldCodeAiOutOfUsageText",
          children: "You don't have any Super Bot.xd usage left - use Bot.xd or get Super Rank for more usage!"
        }), (0, qQ.jsx)(wQ.s, {
          className: "WorldCodeAiOutOfUsageButton",
          onClick: WQ,
          children: "Get Super Rank"
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);