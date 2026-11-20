export const id = 198;
export const ids = [198];
export const modules = {
  39906: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      FORMER_BLOCK_IMAGE_NAMES: () => Rk.c,
      textureAnimationData: () => tk.x,
      textureNameToIndex: () => tk.A
    });
    var Rk = Bk(38362),
      tk = Bk(9095)
  },
  9169: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => tk,
      d: () => ak
    });
    var Rk = Bk(9127);
    const tk = "Air",
      ak = Object.freeze(new Rk.g(tk, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  38362: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => Rk,
      d: () => tk
    });
    const Rk = new Map(["graphite", "football", "torch", "torch_blue", "torch_cyan", "torch_green", "torch_orange", "torch_purple", "torch_red"].map((kk => [kk, `${kk}_block`])));

    function tk(kk) {
      var Fk;
      return null !== (Fk = Rk.get(kk)) && void 0 !== Fk ? Fk : kk
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);