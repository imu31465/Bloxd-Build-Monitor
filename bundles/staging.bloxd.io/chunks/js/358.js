export const id = 358;
export const ids = [358];
export const modules = {
  61150: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      postprocessVertexShader: () => gT
    });
    var WT = mT(39934);
    const zT = "postprocessVertexShader",
      MT = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    WT.d.ShadersStore[zT] || (WT.d.ShadersStore[zT] = MT);
    const gT = {
      name: zT,
      shader: MT
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);