export const id = 245;
export const ids = [245, 346];
export const modules = {
  39162: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => hv
    });
    class hv {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? hv.ShadersRepository : hv.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? hv.ShadersStore : hv.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? hv.IncludesShadersStore : hv.IncludesShadersStoreWGSL
      }
    }
    hv.ShadersRepository = "src/Shaders/", hv.ShadersStore = {}, hv.IncludesShadersStore = {}, hv.ShadersRepositoryWGSL = "src/ShadersWGSL/", hv.ShadersStoreWGSL = {}, hv.IncludesShadersStoreWGSL = {}
  },
  60587: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      postprocessVertexShader: () => gv
    });
    var hv = Pv(39162);
    const Sv = "postprocessVertexShader",
      ev = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    hv.d.ShadersStore[Sv] || (hv.d.ShadersStore[Sv] = ev);
    const gv = {
      name: Sv,
      shader: ev
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);