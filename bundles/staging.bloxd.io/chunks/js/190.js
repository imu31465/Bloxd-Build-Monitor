export const id = 190;
export const ids = [190];
export const modules = {
  40588: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      FORMER_BLOCK_IMAGE_NAMES: () => QB.d,
      textureAnimationData: () => nB.q,
      textureNameToIndex: () => nB.s
    });
    var QB = zB(38831),
      nB = zB(9266)
  },
  9366: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => nB,
      e: () => dB
    });
    var QB = zB(9311);
    const nB = "Air",
      dB = Object.freeze(new QB.h(nB, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  38831: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => QB,
      g: () => nB
    });
    const QB = new Map(["graphite", "football", "torch", "torch_blue", "torch_cyan", "torch_green", "torch_orange", "torch_purple", "torch_red"].map((BB => [BB, `${BB}_block`])));

    function nB(BB) {
      var jB;
      return null !== (jB = QB.get(BB)) && void 0 !== jB ? jB : BB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);