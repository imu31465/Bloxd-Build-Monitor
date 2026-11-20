export const id = 345;
export const ids = [345];
export const modules = {
  60600: (bb, ub, hb) => {
    var Bb;
    hb.r(ub), hb.d(ub, {
        ShaderLanguage: () => Bb
      }),
      function(bb) {
        bb[bb.GLSL = 0] = "GLSL", bb[bb.WGSL = 1] = "WGSL"
      }(Bb || (Bb = {}))
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);