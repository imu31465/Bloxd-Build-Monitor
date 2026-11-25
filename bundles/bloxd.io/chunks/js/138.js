export const id = 138;
export const ids = [138];
export const modules = {
  6778: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      loadShaderPackTextures: () => GB,
      shaderPackTextures: () => vB
    });
    var TB = ZB(5210);
    let JB = null,
      oB = null;

    function GB() {
      return oB ??= Promise.all([ZB.e(73), ZB.e(190)]).then((() => ZB(40534))).then((BB => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: IB,
          textureNameToIndex: ZB,
          textureAnimationData: oB
        } = BB;
        return JB ??= (0, TB.l)(ZB, oB, IB), JB
      })), oB
    }

    function vB() {
      if (null === JB) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return JB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);