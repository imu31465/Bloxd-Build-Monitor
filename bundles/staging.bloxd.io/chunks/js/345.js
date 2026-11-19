export const id = 345;
export const ids = [345];
export const modules = {
  60015: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      postprocessVertexShader: () => WT
    });
    var iT = IT(38617);
    const zT = "postprocessVertexShader",
      kT = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    iT.c.ShadersStore[zT] || (iT.c.ShadersStore[zT] = kT);
    const WT = {
      name: zT,
      shader: kT
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);