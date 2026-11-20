export const id = 382;
export const ids = [382];
export const modules = {
  61640: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      proceduralVertexShader: () => Xk
    });
    var Rk = Bk(39270);
    const tk = "proceduralVertexShader",
      ak = "attribute vec2 position;varying vec2 vPosition;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvPosition=position;vUV=position*madd+madd;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    Rk.d.ShadersStore[tk] || (Rk.d.ShadersStore[tk] = ak);
    const Xk = {
      name: tk,
      shader: ak
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);