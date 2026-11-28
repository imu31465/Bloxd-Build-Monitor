export const id = 671;
export const ids = [671];
export const modules = {
  64418: (bb, wb, Mb) => {
    var eb;
    Mb.r(wb), Mb.d(wb, {
        ShaderLanguage: () => eb
      }),
      function(bb) {
        bb[bb.GLSL = 0] = "GLSL", bb[bb.WGSL = 1] = "WGSL"
      }(eb || (eb = {}))
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);