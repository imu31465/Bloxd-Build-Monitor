export const id = 658;
export const ids = [658];
export const modules = {
  63955: (UU, XU, zU) => {
    var cU;
    zU.r(XU), zU.d(XU, {
        ShaderLanguage: () => cU
      }),
      function(UU) {
        UU[UU.GLSL = 0] = "GLSL", UU[UU.WGSL = 1] = "WGSL"
      }(cU || (cU = {}))
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);