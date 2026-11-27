export const id = 708;
export const ids = [708];
export const modules = {
  65180: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      proceduralVertexShader: () => jr
    });
    var Zr = Qr(41743);
    const Wr = "proceduralVertexShader",
      ar = "attribute vec2 position;varying vec2 vPosition;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvPosition=position;vUV=position*madd+madd;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    Zr.e.ShadersStore[Wr] || (Zr.e.ShadersStore[Wr] = ar);
    const jr = {
      name: Wr,
      shader: ar
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);