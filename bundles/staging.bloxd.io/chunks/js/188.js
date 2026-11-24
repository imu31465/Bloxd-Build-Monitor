export const id = 188;
export const ids = [188];
export const modules = {
  40415: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      FORMER_BLOCK_IMAGE_NAMES: () => pD.d,
      textureAnimationData: () => sD.v,
      textureNameToIndex: () => sD.z
    });
    var pD = wD(38698),
      sD = wD(9198)
  },
  9286: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => sD,
      e: () => KD
    });
    var pD = wD(9236);
    const sD = "Air",
      KD = Object.freeze(new pD.h(sD, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  38698: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => pD,
      g: () => sD
    });
    const pD = new Map(["graphite", "football", "torch", "torch_blue", "torch_cyan", "torch_green", "torch_orange", "torch_purple", "torch_red"].map((DD => [DD, `${DD}_block`])));

    function sD(DD) {
      var zD;
      return null !== (zD = pD.get(DD)) && void 0 !== zD ? zD : DD
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);