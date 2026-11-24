export const id = 357;
export const ids = [357];
export const modules = {
  61427: (BB, jB, zB) => {
    var QB;
    zB.r(jB), zB.d(jB, {
        ShaderLanguage: () => QB
      }),
      function(BB) {
        BB[BB.GLSL = 0] = "GLSL", BB[BB.WGSL = 1] = "WGSL"
      }(QB || (QB = {}))
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);