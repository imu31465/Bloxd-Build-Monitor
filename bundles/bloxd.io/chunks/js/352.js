export const id = 352;
export const ids = [352];
export const modules = {
  61321: (mm, Tm, fm) => {
    var hm;
    fm.r(Tm), fm.d(Tm, {
        ShaderLanguage: () => hm
      }),
      function(mm) {
        mm[mm.GLSL = 0] = "GLSL", mm[mm.WGSL = 1] = "WGSL"
      }(hm || (hm = {}))
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);