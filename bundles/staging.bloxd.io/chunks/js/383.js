export const id = 383;
export const ids = [383];
export const modules = {
  61272: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      proceduralVertexShader: () => OT
    });
    var lT = cT(39474);
    const MT = "proceduralVertexShader",
      KT = "attribute vec2 position;varying vec2 vPosition;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvPosition=position;vUV=position*madd+madd;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    lT.d.ShadersStore[MT] || (lT.d.ShadersStore[MT] = KT);
    const OT = {
      name: MT,
      shader: KT
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);