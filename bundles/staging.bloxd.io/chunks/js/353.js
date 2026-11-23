export const id = 353;
export const ids = [353];
export const modules = {
  61285: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      postprocessVertexShader: () => yk
    });
    var Xk = Ik(39837);
    const Tk = "postprocessVertexShader",
      ik = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    Xk.b.ShadersStore[Tk] || (Xk.b.ShadersStore[Tk] = ik);
    const yk = {
      name: Tk,
      shader: ik
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);