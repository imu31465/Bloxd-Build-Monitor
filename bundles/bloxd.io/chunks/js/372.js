export const id = 372;
export const ids = [372];
export const modules = {
  60127: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      proceduralVertexShader: () => XJ
    });
    var FJ = ZJ(38658);
    const UJ = "proceduralVertexShader",
      eJ = "attribute vec2 position;varying vec2 vPosition;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvPosition=position;vUV=position*madd+madd;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    FJ.b.ShadersStore[UJ] || (FJ.b.ShadersStore[UJ] = eJ);
    const XJ = {
      name: UJ,
      shader: eJ
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);