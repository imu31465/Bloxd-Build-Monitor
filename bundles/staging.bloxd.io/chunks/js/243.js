export const id = 243;
export const ids = [243, 345];
export const modules = {
  38943: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Ab
    });
    class Ab {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Ab.ShadersRepository : Ab.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Ab.ShadersStore : Ab.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Ab.IncludesShadersStore : Ab.IncludesShadersStoreWGSL
      }
    }
    Ab.ShadersRepository = "src/Shaders/", Ab.ShadersStore = {}, Ab.IncludesShadersStore = {}, Ab.ShadersRepositoryWGSL = "src/ShadersWGSL/", Ab.ShadersStoreWGSL = {}, Ab.IncludesShadersStoreWGSL = {}
  },
  60252: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      postprocessVertexShader: () => Eb
    });
    var Ab = Ub(38943);
    const Mb = "postprocessVertexShader",
      Tb = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    Ab.d.ShadersStore[Mb] || (Ab.d.ShadersStore[Mb] = Tb);
    const Eb = {
      name: Mb,
      shader: Tb
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);