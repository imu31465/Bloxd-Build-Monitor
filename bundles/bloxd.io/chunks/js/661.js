export const id = 661;
export const ids = [661];
export const modules = {
  64102: (HH, BH, LH) => {
    var AH;
    LH.r(BH), LH.d(BH, {
        ShaderLanguage: () => AH
      }),
      function(HH) {
        HH[HH.GLSL = 0] = "GLSL", HH[HH.WGSL = 1] = "WGSL"
      }(AH || (AH = {}))
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);