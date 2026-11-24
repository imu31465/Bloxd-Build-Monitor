export const id = 253;
export const ids = [253, 353];
export const modules = {
  39960: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => hm
    });
    class hm {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? hm.ShadersRepository : hm.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? hm.ShadersStore : hm.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? hm.IncludesShadersStore : hm.IncludesShadersStoreWGSL
      }
    }
    hm.ShadersRepository = "src/Shaders/", hm.ShadersStore = {}, hm.IncludesShadersStore = {}, hm.ShadersRepositoryWGSL = "src/ShadersWGSL/", hm.ShadersStoreWGSL = {}, hm.IncludesShadersStoreWGSL = {}
  },
  61328: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      postprocessVertexShader: () => xm
    });
    var hm = fm(39960);
    const Am = "postprocessVertexShader",
      am = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    hm.e.ShadersStore[Am] || (hm.e.ShadersStore[Am] = am);
    const xm = {
      name: Am,
      shader: am
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);