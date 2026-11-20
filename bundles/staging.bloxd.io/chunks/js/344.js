export const id = 344;
export const ids = [344];
export const modules = {
  60314: (zz, tz, sz) => {
    var Fz;
    sz.r(tz), sz.d(tz, {
        ShaderLanguage: () => Fz
      }),
      function(zz) {
        zz[zz.GLSL = 0] = "GLSL", zz[zz.WGSL = 1] = "WGSL"
      }(Fz || (Fz = {}))
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);