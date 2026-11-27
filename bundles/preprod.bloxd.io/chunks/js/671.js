export const id = 671;
export const ids = [671];
export const modules = {
  64405: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      postprocessVertexShader: () => PW
    });
    var mW = OW(41392);
    const EW = "postprocessVertexShader",
      NW = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    mW.c.ShadersStore[EW] || (mW.c.ShadersStore[EW] = NW);
    const PW = {
      name: EW,
      shader: NW
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);