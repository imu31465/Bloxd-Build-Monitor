export const id = 257;
export const ids = [257, 358];
export const modules = {
  39905: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => TB
    });
    class TB {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? TB.ShadersRepository : TB.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? TB.ShadersStore : TB.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? TB.IncludesShadersStore : TB.IncludesShadersStoreWGSL
      }
    }
    TB.ShadersRepository = "src/Shaders/", TB.ShadersStore = {}, TB.IncludesShadersStore = {}, TB.ShadersRepositoryWGSL = "src/ShadersWGSL/", TB.ShadersStoreWGSL = {}, TB.IncludesShadersStoreWGSL = {}
  },
  61317: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      postprocessVertexShader: () => GB
    });
    var TB = ZB(39905);
    const JB = "postprocessVertexShader",
      oB = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    TB.c.ShadersStore[JB] || (TB.c.ShadersStore[JB] = oB);
    const GB = {
      name: JB,
      shader: oB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);