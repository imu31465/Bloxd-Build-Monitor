export const id = 243;
export const ids = [243, 345];
export const modules = {
  39270: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Rk
    });
    class Rk {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Rk.ShadersRepository : Rk.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Rk.ShadersStore : Rk.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Rk.IncludesShadersStore : Rk.IncludesShadersStoreWGSL
      }
    }
    Rk.ShadersRepository = "src/Shaders/", Rk.ShadersStore = {}, Rk.IncludesShadersStore = {}, Rk.ShadersRepositoryWGSL = "src/ShadersWGSL/", Rk.ShadersStoreWGSL = {}, Rk.IncludesShadersStoreWGSL = {}
  },
  60923: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      postprocessVertexShader: () => Xk
    });
    var Rk = Bk(39270);
    const tk = "postprocessVertexShader",
      ak = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    Rk.d.ShadersStore[tk] || (Rk.d.ShadersStore[tk] = ak);
    const Xk = {
      name: tk,
      shader: ak
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);