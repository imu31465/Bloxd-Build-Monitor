export const id = 193;
export const ids = [193];
export const modules = {
  39278: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      FORMER_BLOCK_IMAGE_NAMES: () => iT.b,
      textureAnimationData: () => zT.r,
      textureNameToIndex: () => zT.u
    });
    var iT = IT(37709),
      zT = IT(8829)
  },
  8914: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => zT,
      d: () => kT
    });
    var iT = IT(8869);
    const zT = "Air",
      kT = Object.freeze(new iT.f(zT, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  37709: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => iT,
      e: () => zT
    });
    const iT = new Map(["graphite", "football", "torch", "torch_blue", "torch_cyan", "torch_green", "torch_orange", "torch_purple", "torch_red"].map((TT => [TT, `${TT}_block`])));

    function zT(TT) {
      var oT;
      return null !== (oT = iT.get(TT)) && void 0 !== oT ? oT : TT
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);