export const id = 198;
export const ids = [198];
export const modules = {
  39645: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      FORMER_BLOCK_IMAGE_NAMES: () => Ez.d,
      textureAnimationData: () => nz.t,
      textureNameToIndex: () => nz.w
    });
    var Ez = bz(38108),
      nz = bz(9078)
  },
  9165: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => nz,
      c: () => iz
    });
    var Ez = bz(9125);
    const nz = "Air",
      iz = Object.freeze(new Ez.f(nz, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  38108: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => Ez,
      f: () => nz
    });
    const Ez = new Map(["graphite", "football", "torch", "torch_blue", "torch_cyan", "torch_green", "torch_orange", "torch_purple", "torch_red"].map((zz => [zz, `${zz}_block`])));

    function nz(zz) {
      var uz;
      return null !== (uz = Ez.get(zz)) && void 0 !== uz ? uz : zz
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);