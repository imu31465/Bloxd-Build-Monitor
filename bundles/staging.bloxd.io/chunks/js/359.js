export const id = 359;
export const ids = [359];
export const modules = {
  61453: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      WorldCodeAiOutOfUsage: () => dB
    });
    var QB = zB(1478),
      nB = zB(1148);

    function dB(BB) {
      let {
        onGetSuperRank: jB
      } = BB;
      return (0, nB.jsxs)("div", {
        className: "WorldCodeAiOutOfUsage",
        children: [(0, nB.jsx)("p", {
          className: "WorldCodeAiOutOfUsageText",
          children: "You don't have any Super Bot.xd usage left - use Bot.xd or get Super Rank for more usage!"
        }), (0, nB.jsx)(QB.m, {
          className: "WorldCodeAiOutOfUsageButton",
          onClick: jB,
          children: "Get Super Rank"
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);