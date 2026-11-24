export const id = 394;
export const ids = [394];
export const modules = {
  61876: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      proceduralVertexShader: () => GB
    });
    var TB = ZB(39905);
    const JB = "proceduralVertexShader",
      oB = "attribute vec2 position;varying vec2 vPosition;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvPosition=position;vUV=position*madd+madd;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    TB.c.ShadersStore[JB] || (TB.c.ShadersStore[JB] = oB);
    const GB = {
      name: JB,
      shader: oB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);