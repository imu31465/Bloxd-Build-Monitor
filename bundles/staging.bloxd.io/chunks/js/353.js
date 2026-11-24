export const id = 353;
export const ids = [353];
export const modules = {
  61035: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      postprocessVertexShader: () => rD
    });
    var pD = wD(39776);
    const sD = "postprocessVertexShader",
      KD = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    pD.e.ShadersStore[sD] || (pD.e.ShadersStore[sD] = KD);
    const rD = {
      name: sD,
      shader: KD
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);