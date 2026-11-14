export const id = 362;
export const ids = [362];
export const modules = {
  59558: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      proceduralVertexShader: () => hF
    });
    var CF = SF(37824);
    const AF = "proceduralVertexShader",
      uF = "attribute vec2 position;varying vec2 vPosition;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvPosition=position;vUV=position*madd+madd;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    CF.c.ShadersStore[AF] || (CF.c.ShadersStore[AF] = uF);
    const hF = {
      name: AF,
      shader: uF
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);