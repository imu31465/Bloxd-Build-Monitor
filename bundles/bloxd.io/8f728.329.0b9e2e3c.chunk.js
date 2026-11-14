export const id = 329;
export const ids = [329];
export const modules = {
  59090: (cB, Bc, nc) => {
    var Vc;
    nc.r(Bc), nc.d(Bc, {
        ShaderLanguage: () => Vc
      }),
      function(cB) {
        cB[cB.GLSL = 0] = "GLSL", cB[cB.WGSL = 1] = "WGSL"
      }(Vc || (Vc = {}))
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);