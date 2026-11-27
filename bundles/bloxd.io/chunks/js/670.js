export const id = 670;
export const ids = [670];
export const modules = {
  64402: (WW, iW, OW) => {
    var mW;
    OW.r(iW), OW.d(iW, {
        ShaderLanguage: () => mW
      }),
      function(WW) {
        WW[WW.GLSL = 0] = "GLSL", WW[WW.WGSL = 1] = "WGSL"
      }(mW || (mW = {}))
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);