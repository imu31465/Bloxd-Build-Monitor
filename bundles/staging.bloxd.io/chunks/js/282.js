export const id = 282;
export const ids = [282, 662];
export const modules = {
  40954: (ee, ie, He) => {
    He.d(ie, {
      d: () => ye
    });
    class ye {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? ye.ShadersRepository : ye.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? ye.ShadersStore : ye.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? ye.IncludesShadersStore : ye.IncludesShadersStoreWGSL
      }
    }
    ye.ShadersRepository = "src/Shaders/", ye.ShadersStore = {}, ye.IncludesShadersStore = {}, ye.ShadersRepositoryWGSL = "src/ShadersWGSL/", ye.ShadersStoreWGSL = {}, ye.IncludesShadersStoreWGSL = {}
  },
  63834: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      postprocessVertexShader: () => Ke
    });
    var ye = He(40954);
    const be = "postprocessVertexShader",
      Me = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    ye.d.ShadersStore[be] || (ye.d.ShadersStore[be] = Me);
    const Ke = {
      name: be,
      shader: Me
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);