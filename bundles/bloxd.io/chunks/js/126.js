export const id = 126;
export const ids = [126];
export const modules = {
  42174: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      FORMER_BLOCK_IMAGE_NAMES: () => eb.b,
      textureAnimationData: () => Hb.s,
      textureNameToIndex: () => Hb.u
    });
    var eb = Mb(40018),
      Hb = Mb(5868)
  },
  5967: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Hb,
      g: () => pb
    });
    var eb = Mb(5914);
    const Hb = "Air",
      pb = Object.freeze(new eb.g(Hb, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  40018: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => eb,
      e: () => Hb
    });
    const eb = new Map(["graphite", "football", "torch", "torch_blue", "torch_cyan", "torch_green", "torch_orange", "torch_purple", "torch_red"].map((bb => [bb, `${bb}_block`])));

    function Hb(bb) {
      var wb;
      return null !== (wb = eb.get(bb)) && void 0 !== wb ? wb : bb
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);