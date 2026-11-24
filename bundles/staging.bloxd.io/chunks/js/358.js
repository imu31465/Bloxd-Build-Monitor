export const id = 358;
export const ids = [358];
export const modules = {
  61435: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      postprocessVertexShader: () => IB
    });
    var QB = zB(39932);
    const nB = "postprocessVertexShader",
      dB = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    QB.e.ShadersStore[nB] || (QB.e.ShadersStore[nB] = dB);
    const IB = {
      name: nB,
      shader: dB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);