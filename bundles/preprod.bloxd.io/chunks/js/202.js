export const id = 202;
export const ids = [202];
export const modules = {
  41573: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      FORMER_BLOCK_IMAGE_NAMES: () => cU.e,
      textureAnimationData: () => yU.u,
      textureNameToIndex: () => yU.x
    });
    var cU = zU(39537),
      yU = zU(9782)
  },
  9894: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => yU,
      f: () => QU
    });
    var cU = zU(9834);
    const yU = "Air",
      QU = Object.freeze(new cU.g(yU, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  39537: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => cU,
      f: () => yU
    });
    const cU = new Map(["graphite", "football", "torch", "torch_blue", "torch_cyan", "torch_green", "torch_orange", "torch_purple", "torch_red"].map((UU => [UU, `${UU}_block`])));

    function yU(UU) {
      var XU;
      return null !== (XU = cU.get(UU)) && void 0 !== XU ? XU : UU
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);