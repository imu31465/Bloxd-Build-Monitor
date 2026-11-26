export const id = 150;
export const ids = [150];
export const modules = {
  7219: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      loadShaderPackTextures: () => AU,
      shaderPackTextures: () => FU
    });
    var cU = zU(5608);
    let yU = null,
      QU = null;

    function AU() {
      return QU ??= Promise.all([zU.e(84), zU.e(202)]).then((() => zU(41573))).then((UU => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: XU,
          textureNameToIndex: zU,
          textureAnimationData: QU
        } = UU;
        return yU ??= (0, cU.k)(zU, QU, XU), yU
      })), QU
    }

    function FU() {
      if (null === yU) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return yU
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);