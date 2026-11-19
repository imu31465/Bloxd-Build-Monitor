export const id = 344;
export const ids = [344];
export const modules = {
  60213: (YY, rY, DY) => {
    var FY;
    DY.r(rY), DY.d(rY, {
        ShaderLanguage: () => FY
      }),
      function(YY) {
        YY[YY.GLSL = 0] = "GLSL", YY[YY.WGSL = 1] = "WGSL"
      }(FY || (FY = {}))
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);