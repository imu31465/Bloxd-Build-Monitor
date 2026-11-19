export const id = 344;
export const ids = [344];
export const modules = {
  60391: (DD, CD, cD) => {
    var ID;
    cD.r(CD), cD.d(CD, {
        ShaderLanguage: () => ID
      }),
      function(DD) {
        DD[DD.GLSL = 0] = "GLSL", DD[DD.WGSL = 1] = "WGSL"
      }(ID || (ID = {}))
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);