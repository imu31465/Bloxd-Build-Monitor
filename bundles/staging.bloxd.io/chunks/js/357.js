export const id = 357;
export const ids = [357];
export const modules = {
  61816: (GG, bG, ZG) => {
    var wG;
    ZG.r(bG), ZG.d(bG, {
        ShaderLanguage: () => wG
      }),
      function(GG) {
        GG[GG.GLSL = 0] = "GLSL", GG[GG.WGSL = 1] = "WGSL"
      }(wG || (wG = {}))
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);