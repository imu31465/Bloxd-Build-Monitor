export const id = 357;
export const ids = [357];
export const modules = {
  61492: (uu, Eu, ju) => {
    var su;
    ju.r(Eu), ju.d(Eu, {
        ShaderLanguage: () => su
      }),
      function(uu) {
        uu[uu.GLSL = 0] = "GLSL", uu[uu.WGSL = 1] = "WGSL"
      }(su || (su = {}))
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);