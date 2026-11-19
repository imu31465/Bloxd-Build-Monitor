export const id = 193;
export const ids = [193];
export const modules = {
  39609: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      FORMER_BLOCK_IMAGE_NAMES: () => FY.e,
      textureAnimationData: () => AY.w,
      textureNameToIndex: () => AY.z
    });
    var FY = DY(38082),
      AY = DY(8830)
  },
  8908: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => AY,
      g: () => IY
    });
    var FY = DY(8870);
    const AY = "Air",
      IY = Object.freeze(new FY.h(AY, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  38082: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => FY,
      i: () => AY
    });
    const FY = new Map(["graphite", "football", "torch", "torch_blue", "torch_cyan", "torch_green", "torch_orange", "torch_purple", "torch_red"].map((YY => [YY, `${YY}_block`])));

    function AY(YY) {
      var rY;
      return null !== (rY = FY.get(YY)) && void 0 !== rY ? rY : YY
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);