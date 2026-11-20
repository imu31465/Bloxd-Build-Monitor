export const id = 199;
export const ids = [199];
export const modules = {
  39946: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      FORMER_BLOCK_IMAGE_NAMES: () => Bb.d,
      textureAnimationData: () => Ob.t,
      textureNameToIndex: () => Ob.v
    });
    var Bb = hb(38350),
      Ob = hb(9181)
  },
  9280: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Ob,
      g: () => Gb
    });
    var Bb = hb(9235);
    const Ob = "Air",
      Gb = Object.freeze(new Bb.d(Ob, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  38350: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Bb,
      e: () => Ob
    });
    const Bb = new Map(["graphite", "football", "torch", "torch_blue", "torch_cyan", "torch_green", "torch_orange", "torch_purple", "torch_red"].map((bb => [bb, `${bb}_block`])));

    function Ob(bb) {
      var ub;
      return null !== (ub = Bb.get(bb)) && void 0 !== ub ? ub : bb
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);