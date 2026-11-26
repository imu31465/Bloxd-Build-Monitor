export const id = 278;
export const ids = [278, 662];
export const modules = {
  41108: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => JV
    });
    class JV {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? JV.ShadersRepository : JV.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? JV.ShadersStore : JV.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? JV.IncludesShadersStore : JV.IncludesShadersStoreWGSL
      }
    }
    JV.ShadersRepository = "src/Shaders/", JV.ShadersStore = {}, JV.IncludesShadersStore = {}, JV.ShadersRepositoryWGSL = "src/ShadersWGSL/", JV.ShadersStoreWGSL = {}, JV.IncludesShadersStoreWGSL = {}
  },
  64298: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      postprocessVertexShader: () => yV
    });
    var JV = xV(41108);
    const YV = "postprocessVertexShader",
      UV = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    JV.d.ShadersStore[YV] || (JV.d.ShadersStore[YV] = UV);
    const yV = {
      name: YV,
      shader: UV
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);