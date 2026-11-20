export const id = 345;
export const ids = [345];
export const modules = {
  60565: (TT, kT, cT) => {
    var lT;
    cT.r(kT), cT.d(kT, {
        ShaderLanguage: () => lT
      }),
      function(TT) {
        TT[TT.GLSL = 0] = "GLSL", TT[TT.WGSL = 1] = "WGSL"
      }(lT || (lT = {}))
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);