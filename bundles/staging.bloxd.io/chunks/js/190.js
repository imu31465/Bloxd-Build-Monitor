export const id = 190;
export const ids = [190];
export const modules = {
  40868: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      FORMER_BLOCK_IMAGE_NAMES: () => wG.d,
      textureAnimationData: () => SG.y,
      textureNameToIndex: () => SG.B
    });
    var wG = ZG(39130),
      SG = ZG(9249)
  },
  9356: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => SG,
      f: () => LG
    });
    var wG = ZG(9303);
    const SG = "Air",
      LG = Object.freeze(new wG.h(SG, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  39130: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => wG,
      e: () => SG
    });
    const wG = new Map(["graphite", "football", "torch", "torch_blue", "torch_cyan", "torch_green", "torch_orange", "torch_purple", "torch_red"].map((GG => [GG, `${GG}_block`])));

    function SG(GG) {
      var bG;
      return null !== (bG = wG.get(GG)) && void 0 !== bG ? bG : GG
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);