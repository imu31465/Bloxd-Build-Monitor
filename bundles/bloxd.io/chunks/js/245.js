export const id = 245;
export const ids = [245, 346];
export const modules = {
  39829: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => pd
    });
    class pd {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? pd.ShadersRepository : pd.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? pd.ShadersStore : pd.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? pd.IncludesShadersStore : pd.IncludesShadersStoreWGSL
      }
    }
    pd.ShadersRepository = "src/Shaders/", pd.ShadersStore = {}, pd.IncludesShadersStore = {}, pd.ShadersRepositoryWGSL = "src/ShadersWGSL/", pd.ShadersStoreWGSL = {}, pd.IncludesShadersStoreWGSL = {}
  },
  60885: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      postprocessVertexShader: () => Pd
    });
    var pd = kd(39829);
    const Nd = "postprocessVertexShader",
      Wd = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    pd.c.ShadersStore[Nd] || (pd.c.ShadersStore[Nd] = Wd);
    const Pd = {
      name: Nd,
      shader: Wd
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);