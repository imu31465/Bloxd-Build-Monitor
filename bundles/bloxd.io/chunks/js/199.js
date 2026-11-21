export const id = 199;
export const ids = [199];
export const modules = {
  40477: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      FORMER_BLOCK_IMAGE_NAMES: () => pd.b,
      textureAnimationData: () => Nd.x,
      textureNameToIndex: () => Nd.z
    });
    var pd = kd(38861),
      Nd = kd(9331)
  },
  9422: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Nd,
      h: () => Wd
    });
    var pd = kd(9383);
    const Nd = "Air",
      Wd = Object.freeze(new pd.f(Nd, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  38861: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => pd,
      c: () => Nd
    });
    const pd = new Map(["graphite", "football", "torch", "torch_blue", "torch_cyan", "torch_green", "torch_orange", "torch_purple", "torch_red"].map((dd => [dd, `${dd}_block`])));

    function Nd(dd) {
      var Jd;
      return null !== (Jd = pd.get(dd)) && void 0 !== Jd ? Jd : dd
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);