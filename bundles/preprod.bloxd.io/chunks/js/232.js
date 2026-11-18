export const id = 232;
export const ids = [232, 333];
export const modules = {
  38319: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => Uy
    });
    class Uy {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Uy.ShadersRepository : Uy.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Uy.ShadersStore : Uy.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Uy.IncludesShadersStore : Uy.IncludesShadersStoreWGSL
      }
    }
    Uy.ShadersRepository = "src/Shaders/", Uy.ShadersStore = {}, Uy.IncludesShadersStore = {}, Uy.ShadersRepositoryWGSL = "src/ShadersWGSL/", Uy.ShadersStoreWGSL = {}, Uy.IncludesShadersStoreWGSL = {}
  },
  59697: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      postprocessVertexShader: () => Zy
    });
    var Uy = Wy(38319);
    const hy = "postprocessVertexShader",
      fy = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    Uy.e.ShadersStore[hy] || (Uy.e.ShadersStore[hy] = fy);
    const Zy = {
      name: hy,
      shader: fy
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);