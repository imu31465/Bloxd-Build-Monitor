export const id = 344;
export const ids = [344];
export const modules = {
  60576: (bb, cb, sb) => {
    var kb;
    sb.r(cb), sb.d(cb, {
        ShaderLanguage: () => kb
      }),
      function(bb) {
        bb[bb.GLSL = 0] = "GLSL", bb[bb.WGSL = 1] = "WGSL"
      }(kb || (kb = {}))
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);