export const id = 257;
export const ids = [257, 358];
export const modules = {
  40237: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => wG
    });
    class wG {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? wG.ShadersRepository : wG.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? wG.ShadersStore : wG.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? wG.IncludesShadersStore : wG.IncludesShadersStoreWGSL
      }
    }
    wG.ShadersRepository = "src/Shaders/", wG.ShadersStore = {}, wG.IncludesShadersStore = {}, wG.ShadersRepositoryWGSL = "src/ShadersWGSL/", wG.ShadersStoreWGSL = {}, wG.IncludesShadersStoreWGSL = {}
  },
  61824: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      postprocessVertexShader: () => yG
    });
    var wG = ZG(40237);
    const SG = "postprocessVertexShader",
      LG = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    wG.e.ShadersStore[SG] || (wG.e.ShadersStore[SG] = LG);
    const yG = {
      name: SG,
      shader: LG
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);