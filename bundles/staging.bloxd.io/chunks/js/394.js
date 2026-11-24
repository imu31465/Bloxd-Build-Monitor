export const id = 394;
export const ids = [394];
export const modules = {
  62040: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      proceduralVertexShader: () => IB
    });
    var QB = zB(39932);
    const nB = "proceduralVertexShader",
      dB = "attribute vec2 position;varying vec2 vPosition;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvPosition=position;vUV=position*madd+madd;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    QB.e.ShadersStore[nB] || (QB.e.ShadersStore[nB] = dB);
    const IB = {
      name: nB,
      shader: dB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);