export const id = 357;
export const ids = [357];
export const modules = {
  61529: (tt, et, Vt) => {
    var Ot;
    Vt.r(et), Vt.d(et, {
        ShaderLanguage: () => Ot
      }),
      function(tt) {
        tt[tt.GLSL = 0] = "GLSL", tt[tt.WGSL = 1] = "WGSL"
      }(Ot || (Ot = {}))
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);