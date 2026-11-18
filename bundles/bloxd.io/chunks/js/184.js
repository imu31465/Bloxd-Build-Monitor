export const id = 184;
export const ids = [184];
export const modules = {
  39231: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      FORMER_BLOCK_IMAGE_NAMES: () => VB.c,
      textureAnimationData: () => yB.r,
      textureNameToIndex: () => yB.u
    });
    var VB = dB(37702),
      yB = dB(8653)
  },
  8746: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => yB,
      d: () => pB
    });
    var VB = dB(8698);
    const yB = "Air",
      pB = Object.freeze(new VB.h(yB, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  37702: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => VB,
      g: () => yB
    });
    const VB = new Map(["graphite", "football", "torch", "torch_blue", "torch_cyan", "torch_green", "torch_orange", "torch_purple", "torch_red"].map((BB => [BB, `${BB}_block`])));

    function yB(BB) {
      var TB;
      return null !== (TB = VB.get(BB)) && void 0 !== TB ? TB : BB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);