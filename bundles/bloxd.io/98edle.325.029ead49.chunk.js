export const id = 325;
export const ids = [325];
export const modules = {
  58597: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      postprocessVertexShader: () => AW
    });
    var wW = MW(37441);
    const CW = "postprocessVertexShader",
      zR = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    wW.c.ShadersStore[CW] || (wW.c.ShadersStore[CW] = zR);
    const AW = {
      name: CW,
      shader: zR
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);