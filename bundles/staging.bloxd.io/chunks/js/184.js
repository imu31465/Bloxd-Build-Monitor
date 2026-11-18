export const id = 184;
export const ids = [184];
export const modules = {
  39255: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      FORMER_BLOCK_IMAGE_NAMES: () => FJ.e,
      textureAnimationData: () => UJ.v,
      textureNameToIndex: () => UJ.x
    });
    var FJ = ZJ(37698),
      UJ = ZJ(8636)
  },
  8719: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => UJ,
      h: () => eJ
    });
    var FJ = ZJ(8687);
    const UJ = "Air",
      eJ = Object.freeze(new FJ.h(UJ, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  37698: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => FJ,
      i: () => UJ
    });
    const FJ = new Map(["graphite", "football", "torch", "torch_blue", "torch_cyan", "torch_green", "torch_orange", "torch_purple", "torch_red"].map((JJ => [JJ, `${JJ}_block`])));

    function UJ(JJ) {
      var cJ;
      return null !== (cJ = FJ.get(JJ)) && void 0 !== cJ ? cJ : JJ
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);