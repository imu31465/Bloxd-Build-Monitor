export const id = 663;
export const ids = [663];
export const modules = {
  63846: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      WorldCodeAiOutOfUsage: () => Ue
    });
    var ye = He(1127),
      be = He(2397),
      Me = He(1438),
      Ke = He(1228);

    function Ue(ee) {
      let {
        onGetSuperRank: ie
      } = ee;
      const {
        t: He
      } = (0, ye.v)(), Ue = (0, be.n)(Date.now()), Fe = He(Ue.nameKey);
      return (0, Ke.jsxs)("div", {
        className: "WorldCodeAiOutOfUsage",
        children: [(0, Ke.jsx)("p", {
          className: "WorldCodeAiOutOfUsageText",
          children: `You don't have any Super Bot.xd usage left - use Bot.xd or get ${Fe} for more usage!`
        }), (0, Ke.jsx)(Me.m, {
          className: "WorldCodeAiOutOfUsageButton",
          onClick: ie,
          children: He(Ue.getKey)
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);