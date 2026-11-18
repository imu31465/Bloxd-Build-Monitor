export const id = 332;
export const ids = [332];
export const modules = {
  59688: (yb, bb, Wy) => {
    var Uy;
    Wy.r(bb), Wy.d(bb, {
        ShaderLanguage: () => Uy
      }),
      function(yb) {
        yb[yb.GLSL = 0] = "GLSL", yb[yb.WGSL = 1] = "WGSL"
      }(Uy || (Uy = {}))
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);