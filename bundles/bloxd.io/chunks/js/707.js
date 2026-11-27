export const id = 707;
export const ids = [707];
export const modules = {
  64752: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      proceduralVertexShader: () => ZR
    });
    var yR = GR(41387);
    const tR = "proceduralVertexShader",
      uR = "attribute vec2 position;varying vec2 vPosition;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvPosition=position;vUV=position*madd+madd;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    yR.b.ShadersStore[tR] || (yR.b.ShadersStore[tR] = uR);
    const ZR = {
      name: tR,
      shader: uR
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);