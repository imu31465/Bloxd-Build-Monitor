export const id = 198;
export const ids = [198];
export const modules = {
  40123: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      FORMER_BLOCK_IMAGE_NAMES: () => lT.e,
      textureAnimationData: () => MT.v,
      textureNameToIndex: () => MT.w
    });
    var lT = cT(38555),
      MT = cT(9447)
  },
  9542: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => MT,
      e: () => KT
    });
    var lT = cT(9495);
    const MT = "Air",
      KT = Object.freeze(new lT.d(MT, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  38555: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => lT,
      g: () => MT
    });
    const lT = new Map(["graphite", "football", "torch", "torch_blue", "torch_cyan", "torch_green", "torch_orange", "torch_purple", "torch_red"].map((TT => [TT, `${TT}_block`])));

    function MT(TT) {
      var kT;
      return null !== (kT = lT.get(TT)) && void 0 !== kT ? kT : TT
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);