export const id = 242;
export const ids = [242, 345];
export const modules = {
  38998: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => FY
    });
    class FY {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? FY.ShadersRepository : FY.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? FY.ShadersStore : FY.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? FY.IncludesShadersStore : FY.IncludesShadersStoreWGSL
      }
    }
    FY.ShadersRepository = "src/Shaders/", FY.ShadersStore = {}, FY.IncludesShadersStore = {}, FY.ShadersRepositoryWGSL = "src/ShadersWGSL/", FY.ShadersStoreWGSL = {}, FY.IncludesShadersStoreWGSL = {}
  },
  60220: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      postprocessVertexShader: () => RY
    });
    var FY = DY(38998);
    const AY = "postprocessVertexShader",
      IY = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    FY.b.ShadersStore[AY] || (FY.b.ShadersStore[AY] = IY);
    const RY = {
      name: AY,
      shader: IY
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);