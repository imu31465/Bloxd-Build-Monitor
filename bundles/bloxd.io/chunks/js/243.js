export const id = 243;
export const ids = [243, 345];
export const modules = {
  39003: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => ID
    });
    class ID {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? ID.ShadersRepository : ID.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? ID.ShadersStore : ID.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? ID.IncludesShadersStore : ID.IncludesShadersStoreWGSL
      }
    }
    ID.ShadersRepository = "src/Shaders/", ID.ShadersStore = {}, ID.IncludesShadersStore = {}, ID.ShadersRepositoryWGSL = "src/ShadersWGSL/", ID.ShadersStoreWGSL = {}, ID.IncludesShadersStoreWGSL = {}
  },
  60393: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      postprocessVertexShader: () => fD
    });
    var ID = cD(39003);
    const pD = "postprocessVertexShader",
      iD = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    ID.e.ShadersStore[pD] || (ID.e.ShadersStore[pD] = iD);
    const fD = {
      name: pD,
      shader: iD
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);