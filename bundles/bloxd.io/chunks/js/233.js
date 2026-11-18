export const id = 233;
export const ids = [233, 335];
export const modules = {
  38595: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => VB
    });
    class VB {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? VB.ShadersRepository : VB.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? VB.ShadersStore : VB.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? VB.IncludesShadersStore : VB.IncludesShadersStoreWGSL
      }
    }
    VB.ShadersRepository = "src/Shaders/", VB.ShadersStore = {}, VB.IncludesShadersStore = {}, VB.ShadersRepositoryWGSL = "src/ShadersWGSL/", VB.ShadersStoreWGSL = {}, VB.IncludesShadersStoreWGSL = {}
  },
  59725: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      postprocessVertexShader: () => lB
    });
    var VB = dB(38595);
    const yB = "postprocessVertexShader",
      pB = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    VB.e.ShadersStore[yB] || (VB.e.ShadersStore[yB] = pB);
    const lB = {
      name: yB,
      shader: pB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);