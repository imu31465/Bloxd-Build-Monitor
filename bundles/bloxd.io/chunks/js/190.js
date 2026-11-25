export const id = 190;
export const ids = [190];
export const modules = {
  40746: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      FORMER_BLOCK_IMAGE_NAMES: () => su.d,
      textureAnimationData: () => Uu.s,
      textureNameToIndex: () => Uu.u
    });
    var su = ju(39067),
      Uu = ju(9409)
  },
  9505: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Uu,
      g: () => Zu
    });
    var su = ju(9456);
    const Uu = "Air",
      Zu = Object.freeze(new su.h(Uu, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  39067: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => su,
      h: () => Uu
    });
    const su = new Map(["graphite", "football", "torch", "torch_blue", "torch_cyan", "torch_green", "torch_orange", "torch_purple", "torch_red"].map((uu => [uu, `${uu}_block`])));

    function Uu(uu) {
      var Eu;
      return null !== (Eu = su.get(uu)) && void 0 !== Eu ? Eu : uu
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);