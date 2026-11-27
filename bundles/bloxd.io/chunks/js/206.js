export const id = 206;
export const ids = [206];
export const modules = {
  41616: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      FORMER_BLOCK_IMAGE_NAMES: () => ye.d,
      textureAnimationData: () => be.q,
      textureNameToIndex: () => be.s
    });
    var ye = He(39511),
      be = He(9961)
  },
  10063: (ee, ie, He) => {
    He.d(ie, {
      e: () => be,
      f: () => Me
    });
    var ye = He(10008);
    const be = "Air",
      Me = Object.freeze(new ye.e(be, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  39511: (ee, ie, He) => {
    He.d(ie, {
      d: () => ye,
      f: () => be
    });
    const ye = new Map(["graphite", "football", "torch", "torch_blue", "torch_cyan", "torch_green", "torch_orange", "torch_purple", "torch_red"].map((ee => [ee, `${ee}_block`])));

    function be(ee) {
      var ie;
      return null !== (ie = ye.get(ee)) && void 0 !== ie ? ie : ee
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);