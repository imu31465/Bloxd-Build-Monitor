export const id = 352;
export const ids = [352];
export const modules = {
  60932: (CC, zC, ZC) => {
    var QC;
    ZC.r(zC), ZC.d(zC, {
        ShaderLanguage: () => QC
      }),
      function(CC) {
        CC[CC.GLSL = 0] = "GLSL", CC[CC.WGSL = 1] = "WGSL"
      }(QC || (QC = {}))
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);