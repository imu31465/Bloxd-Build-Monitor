export const id = 181;
export const ids = [181];
export const modules = {
  38999: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      FORMER_BLOCK_IMAGE_NAMES: () => Uy.c,
      textureAnimationData: () => hy.v,
      textureNameToIndex: () => hy.x
    });
    var Uy = Wy(37394),
      hy = Wy(8459)
  },
  8556: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => hy,
      g: () => fy
    });
    var Uy = Wy(8504);
    const hy = "Air",
      fy = Object.freeze(new Uy.h(hy, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  37394: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Uy,
      e: () => hy
    });
    const Uy = new Map(["graphite", "football", "torch", "torch_blue", "torch_cyan", "torch_green", "torch_orange", "torch_purple", "torch_red"].map((yb => [yb, `${yb}_block`])));

    function hy(yb) {
      var bb;
      return null !== (bb = Uy.get(yb)) && void 0 !== bb ? bb : yb
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);