export const id = 345;
export const ids = [345];
export const modules = {
  60579: (vv, zv, Pv) => {
    var hv;
    Pv.r(zv), Pv.d(zv, {
        ShaderLanguage: () => hv
      }),
      function(vv) {
        vv[vv.GLSL = 0] = "GLSL", vv[vv.WGSL = 1] = "WGSL"
      }(hv || (hv = {}))
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);