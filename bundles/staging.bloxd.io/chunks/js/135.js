export const id = 135;
export const ids = [135];
export const modules = {
  6477: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      loadShaderPackTextures: () => bk,
      shaderPackTextures: () => rk
    });
    var Dk = ik(4965);
    let fk = null,
      Sk = null;

    function bk() {
      return Sk ??= Promise.all([ik.e(72), ik.e(190)]).then((() => ik(40060))).then((kk => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: ek,
          textureNameToIndex: ik,
          textureAnimationData: Sk
        } = kk;
        return fk ??= (0, Dk.h)(ik, Sk, ek), fk
      })), Sk
    }

    function rk() {
      if (null === fk) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return fk
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);