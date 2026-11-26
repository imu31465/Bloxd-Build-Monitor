export const id = 659;
export const ids = [659];
export const modules = {
  63962: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      postprocessVertexShader: () => AU
    });
    var cU = zU(40961);
    const yU = "postprocessVertexShader",
      QU = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    cU.b.ShadersStore[yU] || (cU.b.ShadersStore[yU] = QU);
    const AU = {
      name: yU,
      shader: QU
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);