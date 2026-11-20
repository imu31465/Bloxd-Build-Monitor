export const id = 198;
export const ids = [198];
export const modules = {
  40062: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      FORMER_BLOCK_IMAGE_NAMES: () => Eu.e,
      textureAnimationData: () => Ku.x,
      textureNameToIndex: () => Ku.A
    });
    var Eu = yu(38488),
      Ku = yu(9158)
  },
  9247: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Ku,
      h: () => Qu
    });
    var Eu = yu(9205);
    const Ku = "Air",
      Qu = Object.freeze(new Eu.e(Ku, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  38488: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Eu,
      g: () => Ku
    });
    const Eu = new Map(["graphite", "football", "torch", "torch_blue", "torch_cyan", "torch_green", "torch_orange", "torch_purple", "torch_red"].map((uu => [uu, `${uu}_block`])));

    function Ku(uu) {
      var Ru;
      return null !== (Ru = Eu.get(uu)) && void 0 !== Ru ? Ru : uu
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);