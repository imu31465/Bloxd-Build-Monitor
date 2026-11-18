export const id = 334;
export const ids = [334];
export const modules = {
  59722: (BB, TB, dB) => {
    var VB;
    dB.r(TB), dB.d(TB, {
        ShaderLanguage: () => VB
      }),
      function(BB) {
        BB[BB.GLSL = 0] = "GLSL", BB[BB.WGSL = 1] = "WGSL"
      }(VB || (VB = {}))
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);