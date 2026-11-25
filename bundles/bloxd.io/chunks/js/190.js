export const id = 190;
export const ids = [190];
export const modules = {
  40534: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      FORMER_BLOCK_IMAGE_NAMES: () => TB.b,
      textureAnimationData: () => JB.n,
      textureNameToIndex: () => JB.r
    });
    var TB = ZB(38766),
      JB = ZB(9296)
  },
  9388: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => JB,
      d: () => oB
    });
    var TB = ZB(9340);
    const JB = "Air",
      oB = Object.freeze(new TB.i(JB, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  38766: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => TB,
      f: () => JB
    });
    const TB = new Map(["graphite", "football", "torch", "torch_blue", "torch_cyan", "torch_green", "torch_orange", "torch_purple", "torch_red"].map((BB => [BB, `${BB}_block`])));

    function JB(BB) {
      var IB;
      return null !== (IB = TB.get(BB)) && void 0 !== IB ? IB : BB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);