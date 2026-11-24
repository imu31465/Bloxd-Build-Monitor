export const id = 257;
export const ids = [257, 358];
export const modules = {
  40062: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Op
    });
    class Op {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Op.ShadersRepository : Op.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Op.ShadersStore : Op.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Op.IncludesShadersStore : Op.IncludesShadersStoreWGSL
      }
    }
    Op.ShadersRepository = "src/Shaders/", Op.ShadersStore = {}, Op.IncludesShadersStore = {}, Op.ShadersRepositoryWGSL = "src/ShadersWGSL/", Op.ShadersStoreWGSL = {}, Op.IncludesShadersStoreWGSL = {}
  },
  61392: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      postprocessVertexShader: () => Sp
    });
    var Op = cp(40062);
    const op = "postprocessVertexShader",
      Ip = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    Op.b.ShadersStore[op] || (Op.b.ShadersStore[op] = Ip);
    const Sp = {
      name: op,
      shader: Ip
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);