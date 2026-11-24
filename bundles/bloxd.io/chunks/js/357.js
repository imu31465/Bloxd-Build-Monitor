export const id = 357;
export const ids = [357];
export const modules = {
  61145: (TT, UT, mT) => {
    var WT;
    mT.r(UT), mT.d(UT, {
        ShaderLanguage: () => WT
      }),
      function(TT) {
        TT[TT.GLSL = 0] = "GLSL", TT[TT.WGSL = 1] = "WGSL"
      }(WT || (WT = {}))
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);