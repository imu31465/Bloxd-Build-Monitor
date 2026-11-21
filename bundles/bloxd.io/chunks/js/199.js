export const id = 199;
export const ids = [199];
export const modules = {
  39913: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      FORMER_BLOCK_IMAGE_NAMES: () => LQ.b,
      textureAnimationData: () => qQ.t,
      textureNameToIndex: () => qQ.v
    });
    var LQ = wQ(38251),
      qQ = wQ(9195)
  },
  9289: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => qQ,
      i: () => oQ
    });
    var LQ = wQ(9252);
    const qQ = "Air",
      oQ = Object.freeze(new LQ.g(qQ, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  38251: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => LQ,
      d: () => qQ
    });
    const LQ = new Map(["graphite", "football", "torch", "torch_blue", "torch_cyan", "torch_green", "torch_orange", "torch_purple", "torch_red"].map((QQ => [QQ, `${QQ}_block`])));

    function qQ(QQ) {
      var FQ;
      return null !== (FQ = LQ.get(QQ)) && void 0 !== FQ ? FQ : QQ
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);