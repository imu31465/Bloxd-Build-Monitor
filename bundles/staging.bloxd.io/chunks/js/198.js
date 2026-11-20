export const id = 198;
export const ids = [198];
export const modules = {
  39908: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      FORMER_BLOCK_IMAGE_NAMES: () => kb.b,
      textureAnimationData: () => Wb.v,
      textureNameToIndex: () => Wb.z
    });
    var kb = sb(38328),
      Wb = sb(9017)
  },
  9103: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Wb,
      f: () => ab
    });
    var kb = sb(9064);
    const Wb = "Air",
      ab = Object.freeze(new kb.f(Wb, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  38328: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => kb,
      e: () => Wb
    });
    const kb = new Map(["graphite", "football", "torch", "torch_blue", "torch_cyan", "torch_green", "torch_orange", "torch_purple", "torch_red"].map((bb => [bb, `${bb}_block`])));

    function Wb(bb) {
      var cb;
      return null !== (cb = kb.get(bb)) && void 0 !== cb ? cb : bb
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);