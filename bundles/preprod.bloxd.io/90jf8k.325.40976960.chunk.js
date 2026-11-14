export const id = 325;
export const ids = [325];
export const modules = {
  58906: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      postprocessVertexShader: () => hF
    });
    var CF = SF(37824);
    const AF = "postprocessVertexShader",
      uF = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    CF.c.ShadersStore[AF] || (CF.c.ShadersStore[AF] = uF);
    const hF = {
      name: AF,
      shader: uF
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);