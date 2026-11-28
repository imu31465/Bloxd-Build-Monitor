export const id = 708;
export const ids = [708];
export const modules = {
  65018: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      proceduralVertexShader: () => Vb
    });
    var eb = Mb(41518);
    const Hb = "proceduralVertexShader",
      pb = "attribute vec2 position;varying vec2 vPosition;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvPosition=position;vUV=position*madd+madd;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    eb.e.ShadersStore[Hb] || (eb.e.ShadersStore[Hb] = pb);
    const Vb = {
      name: Hb,
      shader: pb
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);