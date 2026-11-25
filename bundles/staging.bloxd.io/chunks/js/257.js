export const id = 257;
export const ids = [257, 358];
export const modules = {
  40127: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => su
    });
    class su {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? su.ShadersRepository : su.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? su.ShadersStore : su.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? su.IncludesShadersStore : su.IncludesShadersStoreWGSL
      }
    }
    su.ShadersRepository = "src/Shaders/", su.ShadersStore = {}, su.IncludesShadersStore = {}, su.ShadersRepositoryWGSL = "src/ShadersWGSL/", su.ShadersStoreWGSL = {}, su.IncludesShadersStoreWGSL = {}
  },
  61501: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      postprocessVertexShader: () => Xu
    });
    var su = ju(40127);
    const Uu = "postprocessVertexShader",
      Zu = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    su.b.ShadersStore[Uu] || (su.b.ShadersStore[Uu] = Zu);
    const Xu = {
      name: Uu,
      shader: Zu
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);