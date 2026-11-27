export const id = 126;
export const ids = [126];
export const modules = {
  42031: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      FORMER_BLOCK_IMAGE_NAMES: () => yR.e,
      textureAnimationData: () => tR.z,
      textureNameToIndex: () => tR.B
    });
    var yR = GR(39954),
      tR = GR(5844)
  },
  5953: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => tR,
      d: () => uR
    });
    var yR = GR(5898);
    const tR = "Air",
      uR = Object.freeze(new yR.h(tR, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  39954: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => yR,
      g: () => tR
    });
    const yR = new Map(["graphite", "football", "torch", "torch_blue", "torch_cyan", "torch_green", "torch_orange", "torch_purple", "torch_red"].map((RR => [RR, `${RR}_block`])));

    function tR(RR) {
      var JR;
      return null !== (JR = yR.get(RR)) && void 0 !== JR ? JR : RR
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);