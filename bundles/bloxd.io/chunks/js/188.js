export const id = 188;
export const ids = [188];
export const modules = {
  40500: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      FORMER_BLOCK_IMAGE_NAMES: () => Xk.b,
      textureAnimationData: () => Tk.w,
      textureNameToIndex: () => Tk.x
    });
    var Xk = Ik(38721),
      Tk = Ik(9183)
  },
  9278: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Tk,
      g: () => ik
    });
    var Xk = Ik(9237);
    const Tk = "Air",
      ik = Object.freeze(new Xk.g(Tk, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  38721: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Xk,
      e: () => Tk
    });
    const Xk = new Map(["graphite", "football", "torch", "torch_blue", "torch_cyan", "torch_green", "torch_orange", "torch_purple", "torch_red"].map((kk => [kk, `${kk}_block`])));

    function Tk(kk) {
      var Fk;
      return null !== (Fk = Xk.get(kk)) && void 0 !== Fk ? Fk : kk
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);