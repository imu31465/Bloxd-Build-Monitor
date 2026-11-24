export const id = 352;
export const ids = [352];
export const modules = {
  61028: (DD, zD, wD) => {
    var pD;
    wD.r(zD), wD.d(zD, {
        ShaderLanguage: () => pD
      }),
      function(DD) {
        DD[DD.GLSL = 0] = "GLSL", DD[DD.WGSL = 1] = "WGSL"
      }(pD || (pD = {}))
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);