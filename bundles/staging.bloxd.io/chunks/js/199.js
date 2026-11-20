export const id = 199;
export const ids = [199];
export const modules = {
  40244: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      FORMER_BLOCK_IMAGE_NAMES: () => Yq.c,
      textureAnimationData: () => lq.x,
      textureNameToIndex: () => lq.y
    });
    var Yq = gq(38689),
      lq = gq(9379)
  },
  9464: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => lq,
      d: () => Oq
    });
    var Yq = gq(9433);
    const lq = "Air",
      Oq = Object.freeze(new Yq.e(lq, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  38689: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Yq,
      e: () => lq
    });
    const Yq = new Map(["graphite", "football", "torch", "torch_blue", "torch_cyan", "torch_green", "torch_orange", "torch_purple", "torch_red"].map((qq => [qq, `${qq}_block`])));

    function lq(qq) {
      var Eq;
      return null !== (Eq = Yq.get(qq)) && void 0 !== Eq ? Eq : qq
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);