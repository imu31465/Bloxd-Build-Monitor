export const id = 276;
export const ids = [276, 659];
export const modules = {
  40961: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => cU
    });
    class cU {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? cU.ShadersRepository : cU.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? cU.ShadersStore : cU.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? cU.IncludesShadersStore : cU.IncludesShadersStoreWGSL
      }
    }
    cU.ShadersRepository = "src/Shaders/", cU.ShadersStore = {}, cU.IncludesShadersStore = {}, cU.ShadersRepositoryWGSL = "src/ShadersWGSL/", cU.ShadersStoreWGSL = {}, cU.IncludesShadersStoreWGSL = {}
  },
  63962: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      postprocessVertexShader: () => AU
    });
    var cU = zU(40961);
    const yU = "postprocessVertexShader",
      QU = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    cU.b.ShadersStore[yU] || (cU.b.ShadersStore[yU] = QU);
    const AU = {
      name: yU,
      shader: QU
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);