export const id = 126;
export const ids = [126];
export const modules = {
  42015: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      FORMER_BLOCK_IMAGE_NAMES: () => mW.b,
      textureAnimationData: () => EW.y,
      textureNameToIndex: () => EW.z
    });
    var mW = OW(39955),
      EW = OW(5725)
  },
  5807: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => EW,
      f: () => NW
    });
    var mW = OW(5766);
    const EW = "Air",
      NW = Object.freeze(new mW.h(EW, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  39955: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => mW,
      f: () => EW
    });
    const mW = new Map(["graphite", "football", "torch", "torch_blue", "torch_cyan", "torch_green", "torch_orange", "torch_purple", "torch_red"].map((WW => [WW, `${WW}_block`])));

    function EW(WW) {
      var iW;
      return null !== (iW = mW.get(WW)) && void 0 !== iW ? iW : WW
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);