export const id = 192;
export const ids = [192];
export const modules = {
  40738: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      FORMER_BLOCK_IMAGE_NAMES: () => wQ.e,
      textureAnimationData: () => qQ.s,
      textureNameToIndex: () => qQ.w
    });
    var wQ = XQ(38999),
      qQ = XQ(9580)
  },
  9679: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => qQ,
      c: () => TQ
    });
    var wQ = XQ(9634);
    const qQ = "Air",
      TQ = Object.freeze(new wQ.d(qQ, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  38999: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => wQ,
      h: () => qQ
    });
    const wQ = new Map(["graphite", "football", "torch", "torch_blue", "torch_cyan", "torch_green", "torch_orange", "torch_purple", "torch_red"].map((QQ => [QQ, `${QQ}_block`])));

    function qQ(QQ) {
      var WQ;
      return null !== (WQ = wQ.get(QQ)) && void 0 !== WQ ? WQ : QQ
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);