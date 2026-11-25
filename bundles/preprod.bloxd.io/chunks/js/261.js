export const id = 261;
export const ids = [261, 362];
export const modules = {
  40126: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => wQ
    });
    class wQ {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? wQ.ShadersRepository : wQ.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? wQ.ShadersStore : wQ.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? wQ.IncludesShadersStore : wQ.IncludesShadersStoreWGSL
      }
    }
    wQ.ShadersRepository = "src/Shaders/", wQ.ShadersStore = {}, wQ.IncludesShadersStore = {}, wQ.ShadersRepositoryWGSL = "src/ShadersWGSL/", wQ.ShadersStoreWGSL = {}, wQ.IncludesShadersStoreWGSL = {}
  },
  61542: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      postprocessVertexShader: () => zQ
    });
    var wQ = XQ(40126);
    const qQ = "postprocessVertexShader",
      TQ = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    wQ.b.ShadersStore[qQ] || (wQ.b.ShadersStore[qQ] = TQ);
    const zQ = {
      name: qQ,
      shader: TQ
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);