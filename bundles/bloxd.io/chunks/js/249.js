export const id = 249;
export const ids = [249, 352];
export const modules = {
  39412: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Dk
    });
    class Dk {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Dk.ShadersRepository : Dk.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Dk.ShadersStore : Dk.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Dk.IncludesShadersStore : Dk.IncludesShadersStoreWGSL
      }
    }
    Dk.ShadersRepository = "src/Shaders/", Dk.ShadersStore = {}, Dk.IncludesShadersStore = {}, Dk.ShadersRepositoryWGSL = "src/ShadersWGSL/", Dk.ShadersStoreWGSL = {}, Dk.IncludesShadersStoreWGSL = {}
  },
  60674: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      postprocessVertexShader: () => bk
    });
    var Dk = ik(39412);
    const fk = "postprocessVertexShader",
      Sk = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    Dk.d.ShadersStore[fk] || (Dk.d.ShadersStore[fk] = Sk);
    const bk = {
      name: fk,
      shader: Sk
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);