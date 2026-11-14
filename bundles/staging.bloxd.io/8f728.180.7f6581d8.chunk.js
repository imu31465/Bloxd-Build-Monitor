export const id = 180;
export const ids = [180];
export const modules = {
  38499: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      FORMER_BLOCK_IMAGE_NAMES: () => Vc.c,
      textureAnimationData: () => Ic.t,
      textureNameToIndex: () => Ic.x
    });
    var Vc = nc(37239),
      Ic = nc(8235)
  },
  8327: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Ic,
      f: () => rB
    });
    var Vc = nc(8290);
    const Ic = "Air",
      rB = Object.freeze(new Vc.f(Ic, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  37239: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Vc,
      d: () => Ic
    });
    const Vc = new Map(["graphite", "football", "torch", "torch_blue", "torch_cyan", "torch_green", "torch_orange", "torch_purple", "torch_red"].map((cB => [cB, `${cB}_block`])));

    function Ic(cB) {
      var Bc;
      return null !== (Bc = Vc.get(cB)) && void 0 !== Bc ? Bc : cB
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);