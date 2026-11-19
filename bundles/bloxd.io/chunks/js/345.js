export const id = 345;
export const ids = [345];
export const modules = {
  60393: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      postprocessVertexShader: () => fD
    });
    var ID = cD(39003);
    const pD = "postprocessVertexShader",
      iD = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    ID.e.ShadersStore[pD] || (ID.e.ShadersStore[pD] = iD);
    const fD = {
      name: pD,
      shader: iD
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);