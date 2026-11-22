export const id = 352;
export const ids = [352];
export const modules = {
  60674: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      postprocessVertexShader: () => bk
    });
    var Dk = ik(39412);
    const fk = "postprocessVertexShader",
      Sk = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    Dk.d.ShadersStore[fk] || (Dk.d.ShadersStore[fk] = Sk);
    const bk = {
      name: fk,
      shader: Sk
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);