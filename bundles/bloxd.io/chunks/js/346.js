export const id = 346;
export const ids = [346];
export const modules = {
  60605: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      postprocessVertexShader: () => Ub
    });
    var Bb = hb(39308);
    const Ob = "postprocessVertexShader",
      Gb = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    Bb.e.ShadersStore[Ob] || (Bb.e.ShadersStore[Ob] = Gb);
    const Ub = {
      name: Ob,
      shader: Gb
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);