export const id = 351;
export const ids = [351];
export const modules = {
  60672: (kk, ek, ik) => {
    var Dk;
    ik.r(ek), ik.d(ek, {
        ShaderLanguage: () => Dk
      }),
      function(kk) {
        kk[kk.GLSL = 0] = "GLSL", kk[kk.WGSL = 1] = "WGSL"
      }(Dk || (Dk = {}))
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);