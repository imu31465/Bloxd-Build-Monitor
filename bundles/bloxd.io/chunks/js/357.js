export const id = 357;
export const ids = [357];
export const modules = {
  61309: (BB, IB, ZB) => {
    var TB;
    ZB.r(IB), ZB.d(IB, {
        ShaderLanguage: () => TB
      }),
      function(BB) {
        BB[BB.GLSL = 0] = "GLSL", BB[BB.WGSL = 1] = "WGSL"
      }(TB || (TB = {}))
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);