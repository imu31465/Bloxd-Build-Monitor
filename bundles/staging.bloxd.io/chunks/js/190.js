export const id = 190;
export const ids = [190];
export const modules = {
  40614: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      FORMER_BLOCK_IMAGE_NAMES: () => WT.c,
      textureAnimationData: () => zT.q,
      textureNameToIndex: () => zT.s
    });
    var WT = mT(38840),
      zT = mT(9330)
  },
  9411: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => zT,
      i: () => MT
    });
    var WT = mT(9369);
    const zT = "Air",
      MT = Object.freeze(new WT.g(zT, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  38840: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => WT,
      f: () => zT
    });
    const WT = new Map(["graphite", "football", "torch", "torch_blue", "torch_cyan", "torch_green", "torch_orange", "torch_purple", "torch_red"].map((TT => [TT, `${TT}_block`])));

    function zT(TT) {
      var UT;
      return null !== (UT = WT.get(TT)) && void 0 !== UT ? UT : TT
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);