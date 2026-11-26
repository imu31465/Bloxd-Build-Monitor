export const id = 282;
export const ids = [282, 662];
export const modules = {
  40864: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => YB
    });
    class YB {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? YB.ShadersRepository : YB.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? YB.ShadersStore : YB.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? YB.IncludesShadersStore : YB.IncludesShadersStoreWGSL
      }
    }
    YB.ShadersRepository = "src/Shaders/", YB.ShadersStore = {}, YB.IncludesShadersStore = {}, YB.ShadersRepositoryWGSL = "src/ShadersWGSL/", YB.ShadersStoreWGSL = {}, YB.IncludesShadersStoreWGSL = {}
  },
  63889: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      postprocessVertexShader: () => oB
    });
    var YB = GB(40864);
    const DB = "postprocessVertexShader",
      QB = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    YB.b.ShadersStore[DB] || (YB.b.ShadersStore[DB] = QB);
    const oB = {
      name: DB,
      shader: QB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);