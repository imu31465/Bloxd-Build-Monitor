export const id = 698;
export const ids = [698];
export const modules = {
  64495: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      proceduralVertexShader: () => aM
    });
    var OM = iM(40964);
    const SM = "proceduralVertexShader",
      jM = "attribute vec2 position;varying vec2 vPosition;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvPosition=position;vUV=position*madd+madd;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    OM.e.ShadersStore[SM] || (OM.e.ShadersStore[SM] = jM);
    const aM = {
      name: SM,
      shader: jM
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);