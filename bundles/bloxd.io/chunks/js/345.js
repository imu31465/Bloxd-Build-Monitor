export const id = 345;
export const ids = [345];
export const modules = {
  61130: (qq, Eq, gq) => {
    var Yq;
    gq.r(Eq), gq.d(Eq, {
        ShaderLanguage: () => Yq
      }),
      function(qq) {
        qq[qq.GLSL = 0] = "GLSL", qq[qq.WGSL = 1] = "WGSL"
      }(Yq || (Yq = {}))
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);