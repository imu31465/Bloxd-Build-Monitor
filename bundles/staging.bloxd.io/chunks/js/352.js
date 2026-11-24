export const id = 352;
export const ids = [352];
export const modules = {
  61320: (SS, HS, gS) => {
    var tS;
    gS.r(HS), gS.d(HS, {
        ShaderLanguage: () => tS
      }),
      function(SS) {
        SS[SS.GLSL = 0] = "GLSL", SS[SS.WGSL = 1] = "WGSL"
      }(tS || (tS = {}))
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);