export const id = 671;
export const ids = [671];
export const modules = {
  64778: (dd, Od, md) => {
    var Wd;
    md.r(Od), md.d(Od, {
        ShaderLanguage: () => Wd
      }),
      function(dd) {
        dd[dd.GLSL = 0] = "GLSL", dd[dd.WGSL = 1] = "WGSL"
      }(Wd || (Wd = {}))
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);