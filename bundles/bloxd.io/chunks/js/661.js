export const id = 661;
export const ids = [661];
export const modules = {
  63880: (BB, OB, GB) => {
    var YB;
    GB.r(OB), GB.d(OB, {
        ShaderLanguage: () => YB
      }),
      function(BB) {
        BB[BB.GLSL = 0] = "GLSL", BB[BB.WGSL = 1] = "WGSL"
      }(YB || (YB = {}))
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);