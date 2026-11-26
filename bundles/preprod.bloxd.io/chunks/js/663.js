export const id = 663;
export const ids = [663];
export const modules = {
  63904: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      WorldCodeAiOutOfUsage: () => jB
    });
    var YB = GB(1175),
      DB = GB(2516),
      QB = GB(1485),
      oB = GB(1282);

    function jB(BB) {
      let {
        onGetSuperRank: OB
      } = BB;
      const {
        t: GB
      } = (0, YB.H)(), jB = (0, DB.u)(Date.now()), yB = GB(jB.nameKey);
      return (0, oB.jsxs)("div", {
        className: "WorldCodeAiOutOfUsage",
        children: [(0, oB.jsx)("p", {
          className: "WorldCodeAiOutOfUsageText",
          children: `You don't have any Super Bot.xd usage left - use Bot.xd or get ${yB} for more usage!`
        }), (0, oB.jsx)(QB.q, {
          className: "WorldCodeAiOutOfUsageButton",
          onClick: OB,
          children: GB(jB.getKey)
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);