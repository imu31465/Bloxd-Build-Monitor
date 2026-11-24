export const id = 190;
export const ids = [190];
export const modules = {
  40674: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      FORMER_BLOCK_IMAGE_NAMES: () => Ot.e,
      textureAnimationData: () => qt.r,
      textureNameToIndex: () => qt.s
    });
    var Ot = Vt(38945),
      qt = Vt(9425)
  },
  9512: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => qt,
      e: () => Dt
    });
    var Ot = Vt(9466);
    const qt = "Air",
      Dt = Object.freeze(new Ot.d(qt, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  38945: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Ot,
      h: () => qt
    });
    const Ot = new Map(["graphite", "football", "torch", "torch_blue", "torch_cyan", "torch_green", "torch_orange", "torch_purple", "torch_red"].map((tt => [tt, `${tt}_block`])));

    function qt(tt) {
      var et;
      return null !== (et = Ot.get(tt)) && void 0 !== et ? et : tt
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);