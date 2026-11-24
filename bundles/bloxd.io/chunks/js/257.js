export const id = 257;
export const ids = [257, 358];
export const modules = {
  40061: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Ot
    });
    class Ot {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Ot.ShadersRepository : Ot.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Ot.ShadersStore : Ot.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Ot.IncludesShadersStore : Ot.IncludesShadersStoreWGSL
      }
    }
    Ot.ShadersRepository = "src/Shaders/", Ot.ShadersStore = {}, Ot.IncludesShadersStore = {}, Ot.ShadersRepositoryWGSL = "src/ShadersWGSL/", Ot.ShadersStoreWGSL = {}, Ot.IncludesShadersStoreWGSL = {}
  },
  61532: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      postprocessVertexShader: () => mt
    });
    var Ot = Vt(40061);
    const qt = "postprocessVertexShader",
      Dt = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    Ot.b.ShadersStore[qt] || (Ot.b.ShadersStore[qt] = Dt);
    const mt = {
      name: qt,
      shader: Dt
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);