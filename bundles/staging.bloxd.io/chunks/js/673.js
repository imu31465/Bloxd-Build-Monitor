export const id = 673;
export const ids = [673];
export const modules = {
  64632: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      WorldCodeAiOutOfUsage: () => Ir
    });
    var Zr = Qr(1251),
      Wr = Qr(3267),
      ar = Qr(1576),
      jr = Qr(1338);

    function Ir(rr) {
      let {
        onGetSuperRank: Sr
      } = rr;
      const {
        t: Qr
      } = (0, Zr.E)(), Ir = (0, Wr.r)(Date.now()), fr = Qr(Ir.nameKey);
      return (0, jr.jsxs)("div", {
        className: "WorldCodeAiOutOfUsage",
        children: [(0, jr.jsx)("p", {
          className: "WorldCodeAiOutOfUsageText",
          children: `You don't have any Super Bot.xd usage left - use Bot.xd or get ${fr} for more usage!`
        }), (0, jr.jsx)(ar.p, {
          className: "WorldCodeAiOutOfUsageButton",
          onClick: Sr,
          children: Qr(Ir.getKey)
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);