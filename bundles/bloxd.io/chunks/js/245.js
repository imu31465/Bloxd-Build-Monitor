export const id = 245;
export const ids = [245, 346];
export const modules = {
  39474: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => lT
    });
    class lT {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? lT.ShadersRepository : lT.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? lT.ShadersStore : lT.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? lT.IncludesShadersStore : lT.IncludesShadersStoreWGSL
      }
    }
    lT.ShadersRepository = "src/Shaders/", lT.ShadersStore = {}, lT.IncludesShadersStore = {}, lT.ShadersRepositoryWGSL = "src/ShadersWGSL/", lT.ShadersStoreWGSL = {}, lT.IncludesShadersStoreWGSL = {}
  },
  60569: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      postprocessVertexShader: () => OT
    });
    var lT = cT(39474);
    const MT = "postprocessVertexShader",
      KT = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    lT.d.ShadersStore[MT] || (lT.d.ShadersStore[MT] = KT);
    const OT = {
      name: MT,
      shader: KT
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);