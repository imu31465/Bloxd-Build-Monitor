export const id = 344;
export const ids = [344];
export const modules = {
  60012: (TT, oT, IT) => {
    var iT;
    IT.r(oT), IT.d(oT, {
        ShaderLanguage: () => iT
      }),
      function(TT) {
        TT[TT.GLSL = 0] = "GLSL", TT[TT.WGSL = 1] = "WGSL"
      }(iT || (iT = {}))
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);