export const id = 362;
export const ids = [362];
export const modules = {
  59259: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      proceduralVertexShader: () => AW
    });
    var wW = MW(37441);
    const CW = "proceduralVertexShader",
      zR = "attribute vec2 position;varying vec2 vPosition;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvPosition=position;vUV=position*madd+madd;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    wW.c.ShadersStore[CW] || (wW.c.ShadersStore[CW] = zR);
    const AW = {
      name: CW,
      shader: zR
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);