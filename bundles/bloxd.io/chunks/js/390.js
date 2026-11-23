export const id = 390;
export const ids = [390];
export const modules = {
  61526: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      proceduralVertexShader: () => nC
    });
    var QC = ZC(39674);
    const wC = "proceduralVertexShader",
      bC = "attribute vec2 position;varying vec2 vPosition;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvPosition=position;vUV=position*madd+madd;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    QC.b.ShadersStore[wC] || (QC.b.ShadersStore[wC] = bC);
    const nC = {
      name: wC,
      shader: bC
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);