export const id = 136;
export const ids = [136];
export const modules = {
  6664: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      loadShaderPackTextures: () => rD,
      shaderPackTextures: () => LD
    });
    var pD = wD(5084);
    let sD = null,
      KD = null;

    function rD() {
      return KD ??= Promise.all([wD.e(72), wD.e(188)]).then((() => wD(40415))).then((DD => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: zD,
          textureNameToIndex: wD,
          textureAnimationData: KD
        } = DD;
        return sD ??= (0, pD.m)(wD, KD, zD), sD
      })), KD
    }

    function LD() {
      if (null === sD) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return sD
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);