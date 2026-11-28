export const id = 159;
export const ids = [159];
export const modules = {
  7819: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      loadShaderPackTextures: () => Vb,
      shaderPackTextures: () => gb
    });
    var eb = Mb(6110);
    let Hb = null,
      pb = null;

    function Vb() {
      return pb ??= Promise.all([Mb.e(85), Mb.e(126)]).then((() => Mb(42174))).then((bb => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: wb,
          textureNameToIndex: Mb,
          textureAnimationData: pb
        } = bb;
        return Hb ??= (0, eb.h)(Mb, pb, wb), Hb
      })), pb
    }

    function gb() {
      if (null === Hb) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return Hb
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);