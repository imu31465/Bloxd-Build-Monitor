export const id = 243;
export const ids = [243, 345];
export const modules = {
  39267: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => kb
    });
    class kb {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? kb.ShadersRepository : kb.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? kb.ShadersStore : kb.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? kb.IncludesShadersStore : kb.IncludesShadersStoreWGSL
      }
    }
    kb.ShadersRepository = "src/Shaders/", kb.ShadersStore = {}, kb.IncludesShadersStore = {}, kb.ShadersRepositoryWGSL = "src/ShadersWGSL/", kb.ShadersStoreWGSL = {}, kb.IncludesShadersStoreWGSL = {}
  },
  60585: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      postprocessVertexShader: () => Tb
    });
    var kb = sb(39267);
    const Wb = "postprocessVertexShader",
      ab = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    kb.d.ShadersStore[Wb] || (kb.d.ShadersStore[Wb] = ab);
    const Tb = {
      name: Wb,
      shader: ab
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);