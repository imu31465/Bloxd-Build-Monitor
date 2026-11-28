export const id = 126;
export const ids = [126];
export const modules = {
  42438: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      FORMER_BLOCK_IMAGE_NAMES: () => Wd.d,
      textureAnimationData: () => Fd.v,
      textureNameToIndex: () => Fd.z
    });
    var Wd = md(40313),
      Fd = md(5733)
  },
  5819: (dd, Od, md) => {
    md.d(Od, {
      e: () => Fd,
      f: () => Rd
    });
    var Wd = md(5769);
    const Fd = "Air",
      Rd = Object.freeze(new Wd.f(Fd, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  40313: (dd, Od, md) => {
    md.d(Od, {
      d: () => Wd,
      g: () => Fd
    });
    const Wd = new Map(["graphite", "football", "torch", "torch_blue", "torch_cyan", "torch_green", "torch_orange", "torch_purple", "torch_red"].map((dd => [dd, `${dd}_block`])));

    function Fd(dd) {
      var Od;
      return null !== (Od = Wd.get(dd)) && void 0 !== Od ? Od : dd
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);