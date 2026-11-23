export const id = 253;
export const ids = [253, 353];
export const modules = {
  39674: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => QC
    });
    class QC {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? QC.ShadersRepository : QC.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? QC.ShadersStore : QC.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? QC.IncludesShadersStore : QC.IncludesShadersStoreWGSL
      }
    }
    QC.ShadersRepository = "src/Shaders/", QC.ShadersStore = {}, QC.IncludesShadersStore = {}, QC.ShadersRepositoryWGSL = "src/ShadersWGSL/", QC.ShadersStoreWGSL = {}, QC.IncludesShadersStoreWGSL = {}
  },
  60938: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      postprocessVertexShader: () => nC
    });
    var QC = ZC(39674);
    const wC = "postprocessVertexShader",
      bC = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    QC.b.ShadersStore[wC] || (QC.b.ShadersStore[wC] = bC);
    const nC = {
      name: wC,
      shader: bC
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);