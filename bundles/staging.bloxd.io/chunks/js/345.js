export const id = 345;
export const ids = [345];
export const modules = {
  60880: (dd, Jd, kd) => {
    var pd;
    kd.r(Jd), kd.d(Jd, {
        ShaderLanguage: () => pd
      }),
      function(dd) {
        dd[dd.GLSL = 0] = "GLSL", dd[dd.WGSL = 1] = "WGSL"
      }(pd || (pd = {}))
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);