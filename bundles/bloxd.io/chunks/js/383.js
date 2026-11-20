export const id = 383;
export const ids = [383];
export const modules = {
  61293: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      proceduralVertexShader: () => Ub
    });
    var Bb = hb(39308);
    const Ob = "proceduralVertexShader",
      Gb = "attribute vec2 position;varying vec2 vPosition;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvPosition=position;vUV=position*madd+madd;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    Bb.e.ShadersStore[Ob] || (Bb.e.ShadersStore[Ob] = Gb);
    const Ub = {
      name: Ob,
      shader: Gb
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);