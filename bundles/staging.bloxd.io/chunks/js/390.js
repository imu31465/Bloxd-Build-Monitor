export const id = 390;
export const ids = [390];
export const modules = {
  61619: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      proceduralVertexShader: () => rD
    });
    var pD = wD(39776);
    const sD = "proceduralVertexShader",
      KD = "attribute vec2 position;varying vec2 vPosition;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvPosition=position;vUV=position*madd+madd;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    pD.e.ShadersStore[sD] || (pD.e.ShadersStore[sD] = KD);
    const rD = {
      name: sD,
      shader: KD
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);