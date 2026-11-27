export const id = 661;
export const ids = [661];
export const modules = {
  63827: (ee, ie, He) => {
    var ye;
    He.r(ie), He.d(ie, {
        ShaderLanguage: () => ye
      }),
      function(ee) {
        ee[ee.GLSL = 0] = "GLSL", ee[ee.WGSL = 1] = "WGSL"
      }(ye || (ye = {}))
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);