export const id = 695;
export const ids = [695];
export const modules = {
  64554: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      proceduralVertexShader: () => AU
    });
    var cU = zU(40961);
    const yU = "proceduralVertexShader",
      QU = "attribute vec2 position;varying vec2 vPosition;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvPosition=position;vUV=position*madd+madd;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    cU.b.ShadersStore[yU] || (cU.b.ShadersStore[yU] = QU);
    const AU = {
      name: yU,
      shader: QU
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);