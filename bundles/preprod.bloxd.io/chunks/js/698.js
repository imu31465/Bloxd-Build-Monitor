export const id = 698;
export const ids = [698];
export const modules = {
  64723: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      proceduralVertexShader: () => hH
    });
    var AH = LH(41138);
    const rH = "proceduralVertexShader",
      SH = "attribute vec2 position;varying vec2 vPosition;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvPosition=position;vUV=position*madd+madd;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    AH.c.ShadersStore[rH] || (AH.c.ShadersStore[rH] = SH);
    const hH = {
      name: rH,
      shader: SH
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);