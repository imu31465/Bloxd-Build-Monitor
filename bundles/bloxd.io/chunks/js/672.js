export const id = 672;
export const ids = [672];
export const modules = {
  64421: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      postprocessVertexShader: () => Vb
    });
    var eb = Mb(41518);
    const Hb = "postprocessVertexShader",
      pb = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    eb.e.ShadersStore[Hb] || (eb.e.ShadersStore[Hb] = pb);
    const Vb = {
      name: Hb,
      shader: pb
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);