export const id = 344;
export const ids = [344];
export const modules = {
  60537: (UU, RU, gU) => {
    var tU;
    gU.r(RU), gU.d(RU, {
        ShaderLanguage: () => tU
      }),
      function(UU) {
        UU[UU.GLSL = 0] = "GLSL", UU[UU.WGSL = 1] = "WGSL"
      }(tU || (tU = {}))
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);