export const id = 138;
export const ids = [138];
export const modules = {
  6627: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      loadShaderPackTextures: () => yG,
      shaderPackTextures: () => kG
    });
    var wG = ZG(5062);
    let SG = null,
      LG = null;

    function yG() {
      return LG ??= Promise.all([ZG.e(73), ZG.e(190)]).then((() => ZG(40868))).then((GG => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: bG,
          textureNameToIndex: ZG,
          textureAnimationData: LG
        } = GG;
        return SG ??= (0, wG.j)(ZG, LG, bG), SG
      })), LG
    }

    function kG() {
      if (null === SG) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return SG
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);