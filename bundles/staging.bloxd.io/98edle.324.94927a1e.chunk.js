export const id = 324;
export const ids = [324];
export const modules = {
  58591: (WW, RW, MW) => {
    var wW;
    MW.r(RW), MW.d(RW, {
        ShaderLanguage: () => wW
      }),
      function(WW) {
        WW[WW.GLSL = 0] = "GLSL", WW[WW.WGSL = 1] = "WGSL"
      }(wW || (wW = {}))
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);