export const id = 190;
export const ids = [190];
export const modules = {
  40670: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      FORMER_BLOCK_IMAGE_NAMES: () => Op.e,
      textureAnimationData: () => op.l,
      textureNameToIndex: () => op.p
    });
    var Op = cp(38954),
      op = cp(9338)
  },
  9436: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => op,
      h: () => Ip
    });
    var Op = cp(9385);
    const op = "Air",
      Ip = Object.freeze(new Op.e(op, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  38954: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Op,
      f: () => op
    });
    const Op = new Map(["graphite", "football", "torch", "torch_blue", "torch_cyan", "torch_green", "torch_orange", "torch_purple", "torch_red"].map((pp => [pp, `${pp}_block`])));

    function op(pp) {
      var ip;
      return null !== (ip = Op.get(pp)) && void 0 !== ip ? ip : pp
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);