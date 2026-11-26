export const id = 661;
export const ids = [661];
export const modules = {
  64289: (VV, eV, xV) => {
    var JV;
    xV.r(eV), xV.d(eV, {
        ShaderLanguage: () => JV
      }),
      function(VV) {
        VV[VV.GLSL = 0] = "GLSL", VV[VV.WGSL = 1] = "WGSL"
      }(JV || (JV = {}))
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);