export const id = 204;
export const ids = [204];
export const modules = {
  41764: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      FORMER_BLOCK_IMAGE_NAMES: () => JV.d,
      textureAnimationData: () => YV.w,
      textureNameToIndex: () => YV.A
    });
    var JV = xV(39913),
      YV = xV(9820)
  },
  9922: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => YV,
      f: () => UV
    });
    var JV = xV(9861);
    const YV = "Air",
      UV = Object.freeze(new JV.g(YV, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  39913: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => JV,
      g: () => YV
    });
    const JV = new Map(["graphite", "football", "torch", "torch_blue", "torch_cyan", "torch_green", "torch_orange", "torch_purple", "torch_red"].map((VV => [VV, `${VV}_block`])));

    function YV(VV) {
      var eV;
      return null !== (eV = JV.get(VV)) && void 0 !== eV ? eV : VV
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);