export const id = 188;
export const ids = [188];
export const modules = {
  40313: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      FORMER_BLOCK_IMAGE_NAMES: () => QC.d,
      textureAnimationData: () => wC.u,
      textureNameToIndex: () => wC.v
    });
    var QC = ZC(38551),
      wC = ZC(9194)
  },
  9299: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => wC,
      d: () => bC
    });
    var QC = ZC(9239);
    const wC = "Air",
      bC = Object.freeze(new QC.e(wC, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  38551: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => QC,
      e: () => wC
    });
    const QC = new Map(["graphite", "football", "torch", "torch_blue", "torch_cyan", "torch_green", "torch_orange", "torch_purple", "torch_red"].map((CC => [CC, `${CC}_block`])));

    function wC(CC) {
      var zC;
      return null !== (zC = QC.get(CC)) && void 0 !== zC ? zC : CC
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);