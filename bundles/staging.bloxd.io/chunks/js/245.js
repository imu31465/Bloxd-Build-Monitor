export const id = 245;
export const ids = [245, 346];
export const modules = {
  39617: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Yq
    });
    class Yq {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Yq.ShadersRepository : Yq.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Yq.ShadersStore : Yq.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Yq.IncludesShadersStore : Yq.IncludesShadersStoreWGSL
      }
    }
    Yq.ShadersRepository = "src/Shaders/", Yq.ShadersStore = {}, Yq.IncludesShadersStore = {}, Yq.ShadersRepositoryWGSL = "src/ShadersWGSL/", Yq.ShadersStoreWGSL = {}, Yq.IncludesShadersStoreWGSL = {}
  },
  61138: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      postprocessVertexShader: () => mq
    });
    var Yq = gq(39617);
    const lq = "postprocessVertexShader",
      Oq = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    Yq.d.ShadersStore[lq] || (Yq.d.ShadersStore[lq] = Oq);
    const mq = {
      name: lq,
      shader: Oq
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);