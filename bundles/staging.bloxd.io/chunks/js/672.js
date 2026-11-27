export const id = 672;
export const ids = [672];
export const modules = {
  64611: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      postprocessVertexShader: () => jr
    });
    var Zr = Qr(41743);
    const Wr = "postprocessVertexShader",
      ar = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    Zr.e.ShadersStore[Wr] || (Zr.e.ShadersStore[Wr] = ar);
    const jr = {
      name: Wr,
      shader: ar
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);