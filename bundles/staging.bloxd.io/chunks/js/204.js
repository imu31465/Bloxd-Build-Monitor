export const id = 204;
export const ids = [204];
export const modules = {
  41585: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      FORMER_BLOCK_IMAGE_NAMES: () => OM.e,
      textureAnimationData: () => SM.z,
      textureNameToIndex: () => SM.D
    });
    var OM = iM(39768),
      SM = iM(9816)
  },
  9918: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => SM,
      e: () => jM
    });
    var OM = iM(9863);
    const SM = "Air",
      jM = Object.freeze(new OM.c(SM, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  39768: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => OM,
      h: () => SM
    });
    const OM = new Map(["graphite", "football", "torch", "torch_blue", "torch_cyan", "torch_green", "torch_orange", "torch_purple", "torch_red"].map((MM => [MM, `${MM}_block`])));

    function SM(MM) {
      var rM;
      return null !== (rM = OM.get(MM)) && void 0 !== rM ? rM : MM
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);