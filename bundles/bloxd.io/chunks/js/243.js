export const id = 243;
export const ids = [243, 345];
export const modules = {
  39403: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Eu
    });
    class Eu {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Eu.ShadersRepository : Eu.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Eu.ShadersStore : Eu.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Eu.IncludesShadersStore : Eu.IncludesShadersStoreWGSL
      }
    }
    Eu.ShadersRepository = "src/Shaders/", Eu.ShadersStore = {}, Eu.IncludesShadersStore = {}, Eu.ShadersRepositoryWGSL = "src/ShadersWGSL/", Eu.ShadersStoreWGSL = {}, Eu.IncludesShadersStoreWGSL = {}
  },
  61006: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      postprocessVertexShader: () => mu
    });
    var Eu = yu(39403);
    const Ku = "postprocessVertexShader",
      Qu = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    Eu.e.ShadersStore[Ku] || (Eu.e.ShadersStore[Ku] = Qu);
    const mu = {
      name: Ku,
      shader: Qu
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);