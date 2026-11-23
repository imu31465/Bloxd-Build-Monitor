export const id = 390;
export const ids = [390];
export const modules = {
  61844: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      proceduralVertexShader: () => yk
    });
    var Xk = Ik(39837);
    const Tk = "proceduralVertexShader",
      ik = "attribute vec2 position;varying vec2 vPosition;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvPosition=position;vUV=position*madd+madd;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    Xk.b.ShadersStore[Tk] || (Xk.b.ShadersStore[Tk] = ik);
    const yk = {
      name: Tk,
      shader: ik
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);