export const id = 126;
export const ids = [126];
export const modules = {
  42330: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      FORMER_BLOCK_IMAGE_NAMES: () => Zr.e,
      textureAnimationData: () => Wr.r,
      textureNameToIndex: () => Wr.t
    });
    var Zr = Qr(40295),
      Wr = Qr(5779)
  },
  5878: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Wr,
      h: () => ar
    });
    var Zr = Qr(5830);
    const Wr = "Air",
      ar = Object.freeze(new Zr.e(Wr, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  40295: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Zr,
      i: () => Wr
    });
    const Zr = new Map(["graphite", "football", "torch", "torch_blue", "torch_cyan", "torch_green", "torch_orange", "torch_purple", "torch_red"].map((rr => [rr, `${rr}_block`])));

    function Wr(rr) {
      var Sr;
      return null !== (Sr = Zr.get(rr)) && void 0 !== Sr ? Sr : rr
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);