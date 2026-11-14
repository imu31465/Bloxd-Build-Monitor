export const id = 177;
export const ids = [177];
export const modules = {
  38083: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      FORMER_BLOCK_IMAGE_NAMES: () => wW.d,
      textureAnimationData: () => CW.v,
      textureNameToIndex: () => CW.y
    });
    var wW = MW(36759),
      CW = MW(8180)
  },
  8262: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => CW,
      e: () => zR
    });
    var wW = MW(8220);
    const CW = "Air",
      zR = Object.freeze(new wW.e(CW, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  36759: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => wW,
      h: () => CW
    });
    const wW = new Map(["graphite", "football", "torch", "torch_blue", "torch_cyan", "torch_green", "torch_orange", "torch_purple", "torch_red"].map((WW => [WW, `${WW}_block`])));

    function CW(WW) {
      var RW;
      return null !== (RW = wW.get(WW)) && void 0 !== RW ? RW : WW
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);