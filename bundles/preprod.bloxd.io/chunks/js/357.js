export const id = 357;
export const ids = [357];
export const modules = {
  61383: (pp, ip, cp) => {
    var Op;
    cp.r(ip), cp.d(ip, {
        ShaderLanguage: () => Op
      }),
      function(pp) {
        pp[pp.GLSL = 0] = "GLSL", pp[pp.WGSL = 1] = "WGSL"
      }(Op || (Op = {}))
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);