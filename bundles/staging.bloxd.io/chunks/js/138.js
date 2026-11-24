export const id = 138;
export const ids = [138];
export const modules = {
  6698: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      loadShaderPackTextures: () => gT,
      shaderPackTextures: () => nT
    });
    var WT = mT(5142);
    let zT = null,
      MT = null;

    function gT() {
      return MT ??= Promise.all([mT.e(73), mT.e(190)]).then((() => mT(40614))).then((TT => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: UT,
          textureNameToIndex: mT,
          textureAnimationData: MT
        } = TT;
        return zT ??= (0, WT.l)(mT, MT, UT), zT
      })), MT
    }

    function nT() {
      if (null === zT) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return zT
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);