export const id = 198;
export const ids = [198];
export const modules = {
  39620: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      FORMER_BLOCK_IMAGE_NAMES: () => Ab.e,
      textureAnimationData: () => Mb.x,
      textureNameToIndex: () => Mb.A
    });
    var Ab = Ub(38037),
      Mb = Ub(9007)
  },
  9094: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Mb,
      f: () => Tb
    });
    var Ab = Ub(9043);
    const Mb = "Air",
      Tb = Object.freeze(new Ab.h(Mb, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  38037: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Ab,
      g: () => Mb
    });
    const Ab = new Map(["graphite", "football", "torch", "torch_blue", "torch_cyan", "torch_green", "torch_orange", "torch_purple", "torch_red"].map((bb => [bb, `${bb}_block`])));

    function Mb(bb) {
      var ab;
      return null !== (ab = Ab.get(bb)) && void 0 !== ab ? ab : bb
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);