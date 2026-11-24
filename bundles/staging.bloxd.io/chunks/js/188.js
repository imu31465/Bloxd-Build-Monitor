export const id = 188;
export const ids = [188];
export const modules = {
  40526: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      FORMER_BLOCK_IMAGE_NAMES: () => tS.d,
      textureAnimationData: () => bS.t,
      textureNameToIndex: () => bS.w
    });
    var tS = gS(38731),
      bS = gS(9361)
  },
  9465: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => bS,
      g: () => XS
    });
    var tS = gS(9411);
    const bS = "Air",
      XS = Object.freeze(new tS.e(bS, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  38731: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => tS,
      h: () => bS
    });
    const tS = new Map(["graphite", "football", "torch", "torch_blue", "torch_cyan", "torch_green", "torch_orange", "torch_purple", "torch_red"].map((SS => [SS, `${SS}_block`])));

    function bS(SS) {
      var HS;
      return null !== (HS = tS.get(SS)) && void 0 !== HS ? HS : SS
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);