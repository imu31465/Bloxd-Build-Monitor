export const id = 245;
export const ids = [245, 346];
export const modules = {
  39251: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => LQ
    });
    class LQ {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? LQ.ShadersRepository : LQ.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? LQ.ShadersStore : LQ.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? LQ.IncludesShadersStore : LQ.IncludesShadersStoreWGSL
      }
    }
    LQ.ShadersRepository = "src/Shaders/", LQ.ShadersStore = {}, LQ.IncludesShadersStore = {}, LQ.ShadersRepositoryWGSL = "src/ShadersWGSL/", LQ.ShadersStoreWGSL = {}, LQ.IncludesShadersStoreWGSL = {}
  },
  60652: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      postprocessVertexShader: () => DQ
    });
    var LQ = wQ(39251);
    const qQ = "postprocessVertexShader",
      oQ = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    LQ.c.ShadersStore[qQ] || (LQ.c.ShadersStore[qQ] = oQ);
    const DQ = {
      name: qQ,
      shader: oQ
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);