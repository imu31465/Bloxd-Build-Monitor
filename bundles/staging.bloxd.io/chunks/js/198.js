export const id = 198;
export const ids = [198];
export const modules = {
  39871: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      FORMER_BLOCK_IMAGE_NAMES: () => tU.d,
      textureAnimationData: () => pU.r,
      textureNameToIndex: () => pU.v
    });
    var tU = gU(38278),
      pU = gU(9078)
  },
  9155: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => pU,
      f: () => EU
    });
    var tU = gU(9121);
    const pU = "Air",
      EU = Object.freeze(new tU.h(pU, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  38278: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => tU,
      g: () => pU
    });
    const tU = new Map(["graphite", "football", "torch", "torch_blue", "torch_cyan", "torch_green", "torch_orange", "torch_purple", "torch_red"].map((UU => [UU, `${UU}_block`])));

    function pU(UU) {
      var RU;
      return null !== (RU = tU.get(UU)) && void 0 !== RU ? RU : UU
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);