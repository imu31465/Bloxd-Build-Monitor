export const id = 198;
export const ids = [198];
export const modules = {
  39630: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      FORMER_BLOCK_IMAGE_NAMES: () => Fz.d,
      textureAnimationData: () => Wz.r,
      textureNameToIndex: () => Wz.t
    });
    var Fz = sz(38143),
      Wz = sz(8940)
  },
  9023: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Wz,
      g: () => Xz
    });
    var Fz = sz(8976);
    const Wz = "Air",
      Xz = Object.freeze(new Fz.f(Wz, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  38143: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Fz,
      f: () => Wz
    });
    const Fz = new Map(["graphite", "football", "torch", "torch_blue", "torch_cyan", "torch_green", "torch_orange", "torch_purple", "torch_red"].map((zz => [zz, `${zz}_block`])));

    function Wz(zz) {
      var tz;
      return null !== (tz = Fz.get(zz)) && void 0 !== tz ? tz : zz
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);