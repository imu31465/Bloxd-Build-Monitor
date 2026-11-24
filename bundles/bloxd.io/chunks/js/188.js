export const id = 188;
export const ids = [188];
export const modules = {
  40597: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      FORMER_BLOCK_IMAGE_NAMES: () => hm.e,
      textureAnimationData: () => Am.x,
      textureNameToIndex: () => Am.z
    });
    var hm = fm(38817),
      Am = fm(9141)
  },
  9240: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Am,
      e: () => am
    });
    var hm = fm(9184);
    const Am = "Air",
      am = Object.freeze(new hm.g(Am, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  38817: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => hm,
      g: () => Am
    });
    const hm = new Map(["graphite", "football", "torch", "torch_blue", "torch_cyan", "torch_green", "torch_orange", "torch_purple", "torch_red"].map((mm => [mm, `${mm}_block`])));

    function Am(mm) {
      var Tm;
      return null !== (Tm = hm.get(mm)) && void 0 !== Tm ? Tm : mm
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);