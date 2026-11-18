export const id = 233;
export const ids = [233, 335];
export const modules = {
  38658: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => FJ
    });
    class FJ {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? FJ.ShadersRepository : FJ.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? FJ.ShadersStore : FJ.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? FJ.IncludesShadersStore : FJ.IncludesShadersStoreWGSL
      }
    }
    FJ.ShadersRepository = "src/Shaders/", FJ.ShadersStore = {}, FJ.IncludesShadersStore = {}, FJ.ShadersRepositoryWGSL = "src/ShadersWGSL/", FJ.ShadersStoreWGSL = {}, FJ.IncludesShadersStoreWGSL = {}
  },
  59409: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      postprocessVertexShader: () => XJ
    });
    var FJ = ZJ(38658);
    const UJ = "postprocessVertexShader",
      eJ = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    FJ.b.ShadersStore[UJ] || (FJ.b.ShadersStore[UJ] = eJ);
    const XJ = {
      name: UJ,
      shader: eJ
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);