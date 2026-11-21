export const id = 383;
export const ids = [383];
export const modules = {
  61588: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      proceduralVertexShader: () => Pd
    });
    var pd = kd(39829);
    const Nd = "proceduralVertexShader",
      Wd = "attribute vec2 position;varying vec2 vPosition;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvPosition=position;vUV=position*madd+madd;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    pd.c.ShadersStore[Nd] || (pd.c.ShadersStore[Nd] = Wd);
    const Pd = {
      name: Nd,
      shader: Wd
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);