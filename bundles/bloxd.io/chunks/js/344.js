export const id = 344;
export const ids = [344];
export const modules = {
  60247: (bb, ab, Ub) => {
    var Ab;
    Ub.r(ab), Ub.d(ab, {
        ShaderLanguage: () => Ab
      }),
      function(bb) {
        bb[bb.GLSL = 0] = "GLSL", bb[bb.WGSL = 1] = "WGSL"
      }(Ab || (Ab = {}))
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);