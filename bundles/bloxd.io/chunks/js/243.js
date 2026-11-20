export const id = 243;
export const ids = [243, 345];
export const modules = {
  39225: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => tU
    });
    class tU {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? tU.ShadersRepository : tU.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? tU.ShadersStore : tU.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? tU.IncludesShadersStore : tU.IncludesShadersStoreWGSL
      }
    }
    tU.ShadersRepository = "src/Shaders/", tU.ShadersStore = {}, tU.IncludesShadersStore = {}, tU.ShadersRepositoryWGSL = "src/ShadersWGSL/", tU.ShadersStoreWGSL = {}, tU.IncludesShadersStoreWGSL = {}
  },
  60543: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      postprocessVertexShader: () => PU
    });
    var tU = gU(39225);
    const pU = "postprocessVertexShader",
      EU = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    tU.d.ShadersStore[pU] || (tU.d.ShadersStore[pU] = EU);
    const PU = {
      name: pU,
      shader: EU
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);