export const id = 243;
export const ids = [243, 345];
export const modules = {
  39033: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Ez
    });
    class Ez {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Ez.ShadersRepository : Ez.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Ez.ShadersStore : Ez.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Ez.IncludesShadersStore : Ez.IncludesShadersStoreWGSL
      }
    }
    Ez.ShadersRepository = "src/Shaders/", Ez.ShadersStore = {}, Ez.IncludesShadersStore = {}, Ez.ShadersRepositoryWGSL = "src/ShadersWGSL/", Ez.ShadersStoreWGSL = {}, Ez.IncludesShadersStoreWGSL = {}
  },
  60333: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      postprocessVertexShader: () => lz
    });
    var Ez = bz(39033);
    const nz = "postprocessVertexShader",
      iz = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    Ez.e.ShadersStore[nz] || (Ez.e.ShadersStore[nz] = iz);
    const lz = {
      name: nz,
      shader: iz
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);