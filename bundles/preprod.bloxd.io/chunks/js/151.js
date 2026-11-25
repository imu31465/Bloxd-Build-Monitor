export const id = 151;
export const ids = [151];
export const modules = {
  7120: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      loadShaderPackTextures: () => aM,
      shaderPackTextures: () => PM
    });
    var OM = iM(5442);
    let SM = null,
      jM = null;

    function aM() {
      return jM ??= Promise.all([iM.e(84), iM.e(204)]).then((() => iM(41585))).then((MM => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: rM,
          textureNameToIndex: iM,
          textureAnimationData: jM
        } = MM;
        return SM ??= (0, OM.j)(iM, jM, rM), SM
      })), jM
    }

    function PM() {
      if (null === SM) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return SM
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);