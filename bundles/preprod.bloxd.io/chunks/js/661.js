export const id = 661;
export const ids = [661];
export const modules = {
  63903: (MM, rM, iM) => {
    var OM;
    iM.r(rM), iM.d(rM, {
        ShaderLanguage: () => OM
      }),
      function(MM) {
        MM[MM.GLSL = 0] = "GLSL", MM[MM.WGSL = 1] = "WGSL"
      }(OM || (OM = {}))
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);