export const id = 289;
export const ids = [289, 672];
export const modules = {
  41785: (dd, Od, md) => {
    md.d(Od, {
      e: () => Wd
    });
    class Wd {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Wd.ShadersRepository : Wd.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Wd.ShadersStore : Wd.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Wd.IncludesShadersStore : Wd.IncludesShadersStoreWGSL
      }
    }
    Wd.ShadersRepository = "src/Shaders/", Wd.ShadersStore = {}, Wd.IncludesShadersStore = {}, Wd.ShadersRepositoryWGSL = "src/ShadersWGSL/", Wd.ShadersStoreWGSL = {}, Wd.IncludesShadersStoreWGSL = {}
  },
  64783: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      postprocessVertexShader: () => Xd
    });
    var Wd = md(41785);
    const Fd = "postprocessVertexShader",
      Rd = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    Wd.e.ShadersStore[Fd] || (Wd.e.ShadersStore[Fd] = Rd);
    const Xd = {
      name: Fd,
      shader: Rd
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);