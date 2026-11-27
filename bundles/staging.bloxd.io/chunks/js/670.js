export const id = 670;
export const ids = [670];
export const modules = {
  64143: (RR, JR, GR) => {
    var yR;
    GR.r(JR), GR.d(JR, {
        ShaderLanguage: () => yR
      }),
      function(RR) {
        RR[RR.GLSL = 0] = "GLSL", RR[RR.WGSL = 1] = "WGSL"
      }(yR || (yR = {}))
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);