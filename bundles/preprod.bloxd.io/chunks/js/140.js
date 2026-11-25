export const id = 140;
export const ids = [140];
export const modules = {
  7002: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      loadShaderPackTextures: () => zQ,
      shaderPackTextures: () => sQ
    });
    var wQ = XQ(5396);
    let qQ = null,
      TQ = null;

    function zQ() {
      return TQ ??= Promise.all([XQ.e(75), XQ.e(192)]).then((() => XQ(40738))).then((QQ => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: WQ,
          textureNameToIndex: XQ,
          textureAnimationData: TQ
        } = QQ;
        return qQ ??= (0, wQ.l)(XQ, TQ, WQ), qQ
      })), TQ
    }

    function sQ() {
      if (null === qQ) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return qQ
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);