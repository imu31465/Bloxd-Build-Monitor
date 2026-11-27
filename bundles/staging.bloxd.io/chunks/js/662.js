export const id = 662;
export const ids = [662];
export const modules = {
  63834: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      postprocessVertexShader: () => Ke
    });
    var ye = He(40954);
    const be = "postprocessVertexShader",
      Me = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    ye.d.ShadersStore[be] || (ye.d.ShadersStore[be] = Me);
    const Ke = {
      name: be,
      shader: Me
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);