export const id = 152;
export const ids = [152];
export const modules = {
  7179: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      loadShaderPackTextures: () => hH,
      shaderPackTextures: () => tH
    });
    var AH = LH(5531);
    let rH = null,
      SH = null;

    function hH() {
      return SH ??= Promise.all([LH.e(84), LH.e(206)]).then((() => LH(41802))).then((HH => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: BH,
          textureNameToIndex: LH,
          textureAnimationData: SH
        } = HH;
        return rH ??= (0, AH.f)(LH, SH, BH), rH
      })), SH
    }

    function tH() {
      if (null === rH) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return rH
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);