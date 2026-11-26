export const id = 206;
export const ids = [206];
export const modules = {
  41802: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      FORMER_BLOCK_IMAGE_NAMES: () => AH.b,
      textureAnimationData: () => rH.u,
      textureNameToIndex: () => rH.x
    });
    var AH = LH(39647),
      rH = LH(9940)
  },
  10030: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => rH,
      f: () => SH
    });
    var AH = LH(9979);
    const rH = "Air",
      SH = Object.freeze(new AH.f(rH, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  39647: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => AH,
      e: () => rH
    });
    const AH = new Map(["graphite", "football", "torch", "torch_blue", "torch_cyan", "torch_green", "torch_orange", "torch_purple", "torch_red"].map((HH => [HH, `${HH}_block`])));

    function rH(HH) {
      var BH;
      return null !== (BH = AH.get(HH)) && void 0 !== BH ? BH : HH
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);