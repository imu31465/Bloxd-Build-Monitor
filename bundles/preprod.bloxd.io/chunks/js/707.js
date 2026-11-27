export const id = 707;
export const ids = [707];
export const modules = {
  65038: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      proceduralVertexShader: () => PW
    });
    var mW = OW(41392);
    const EW = "proceduralVertexShader",
      NW = "attribute vec2 position;varying vec2 vPosition;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvPosition=position;vUV=position*madd+madd;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    mW.c.ShadersStore[EW] || (mW.c.ShadersStore[EW] = NW);
    const PW = {
      name: EW,
      shader: NW
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);