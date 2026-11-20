export const id = 344;
export const ids = [344];
export const modules = {
  60921: (kk, Fk, Bk) => {
    var Rk;
    Bk.r(Fk), Bk.d(Fk, {
        ShaderLanguage: () => Rk
      }),
      function(kk) {
        kk[kk.GLSL = 0] = "GLSL", kk[kk.WGSL = 1] = "WGSL"
      }(Rk || (Rk = {}))
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);