export const id = 394;
export const ids = [394];
export const modules = {
  61743: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      proceduralVertexShader: () => gT
    });
    var WT = mT(39934);
    const zT = "proceduralVertexShader",
      MT = "attribute vec2 position;varying vec2 vPosition;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvPosition=position;vUV=position*madd+madd;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    WT.d.ShadersStore[zT] || (WT.d.ShadersStore[zT] = MT);
    const gT = {
      name: zT,
      shader: MT
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);