export const id = 278;
export const ids = [278, 662];
export const modules = {
  40964: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => OM
    });
    class OM {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? OM.ShadersRepository : OM.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? OM.ShadersStore : OM.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? OM.IncludesShadersStore : OM.IncludesShadersStoreWGSL
      }
    }
    OM.ShadersRepository = "src/Shaders/", OM.ShadersStore = {}, OM.IncludesShadersStore = {}, OM.ShadersRepositoryWGSL = "src/ShadersWGSL/", OM.ShadersStoreWGSL = {}, OM.IncludesShadersStoreWGSL = {}
  },
  63910: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      postprocessVertexShader: () => aM
    });
    var OM = iM(40964);
    const SM = "postprocessVertexShader",
      jM = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    OM.e.ShadersStore[SM] || (OM.e.ShadersStore[SM] = jM);
    const aM = {
      name: SM,
      shader: jM
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);