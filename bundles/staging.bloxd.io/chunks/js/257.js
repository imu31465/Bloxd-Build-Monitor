export const id = 257;
export const ids = [257, 358];
export const modules = {
  39934: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => WT
    });
    class WT {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? WT.ShadersRepository : WT.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? WT.ShadersStore : WT.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? WT.IncludesShadersStore : WT.IncludesShadersStoreWGSL
      }
    }
    WT.ShadersRepository = "src/Shaders/", WT.ShadersStore = {}, WT.IncludesShadersStore = {}, WT.ShadersRepositoryWGSL = "src/ShadersWGSL/", WT.ShadersStoreWGSL = {}, WT.IncludesShadersStoreWGSL = {}
  },
  61150: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      postprocessVertexShader: () => gT
    });
    var WT = mT(39934);
    const zT = "postprocessVertexShader",
      MT = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    WT.d.ShadersStore[zT] || (WT.d.ShadersStore[zT] = MT);
    const gT = {
      name: zT,
      shader: MT
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);