export const id = 136;
export const ids = [136];
export const modules = {
  6611: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      loadShaderPackTextures: () => yk,
      shaderPackTextures: () => lk
    });
    var Xk = Ik(5053);
    let Tk = null,
      ik = null;

    function yk() {
      return ik ??= Promise.all([Ik.e(72), Ik.e(188)]).then((() => Ik(40500))).then((kk => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: Fk,
          textureNameToIndex: Ik,
          textureAnimationData: ik
        } = kk;
        return Tk ??= (0, Xk.g)(Ik, ik, Fk), Tk
      })), ik
    }

    function lk() {
      if (null === Tk) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return Tk
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);