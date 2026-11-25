export const id = 662;
export const ids = [662];
export const modules = {
  63910: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      postprocessVertexShader: () => aM
    });
    var OM = iM(40964);
    const SM = "postprocessVertexShader",
      jM = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    OM.e.ShadersStore[SM] || (OM.e.ShadersStore[SM] = jM);
    const aM = {
      name: SM,
      shader: jM
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);