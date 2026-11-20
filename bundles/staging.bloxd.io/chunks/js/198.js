export const id = 198;
export const ids = [198];
export const modules = {
  39807: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      FORMER_BLOCK_IMAGE_NAMES: () => hv.c,
      textureAnimationData: () => Sv.o,
      textureNameToIndex: () => Sv.r
    });
    var hv = Pv(38259),
      Sv = Pv(9101)
  },
  9185: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => Sv,
      f: () => ev
    });
    var hv = Pv(9144);
    const Sv = "Air",
      ev = Object.freeze(new hv.f(Sv, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  38259: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => hv,
      f: () => Sv
    });
    const hv = new Map(["graphite", "football", "torch", "torch_blue", "torch_cyan", "torch_green", "torch_orange", "torch_purple", "torch_red"].map((vv => [vv, `${vv}_block`])));

    function Sv(vv) {
      var zv;
      return null !== (zv = hv.get(vv)) && void 0 !== zv ? zv : vv
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);