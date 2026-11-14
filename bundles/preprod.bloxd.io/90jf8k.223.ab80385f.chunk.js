export const id = 223;
export const ids = [223, 325];
export const modules = {
  37824: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => CF
    });
    class CF {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? CF.ShadersRepository : CF.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? CF.ShadersStore : CF.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? CF.IncludesShadersStore : CF.IncludesShadersStoreWGSL
      }
    }
    CF.ShadersRepository = "src/Shaders/", CF.ShadersStore = {}, CF.IncludesShadersStore = {}, CF.ShadersRepositoryWGSL = "src/ShadersWGSL/", CF.ShadersStoreWGSL = {}, CF.IncludesShadersStoreWGSL = {}
  },
  58906: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      postprocessVertexShader: () => hF
    });
    var CF = SF(37824);
    const AF = "postprocessVertexShader",
      uF = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    CF.c.ShadersStore[AF] || (CF.c.ShadersStore[AF] = uF);
    const hF = {
      name: AF,
      shader: uF
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);