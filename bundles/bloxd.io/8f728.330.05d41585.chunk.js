export const id = 330;
export const ids = [330];
export const modules = {
  59093: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      postprocessVertexShader: () => uc
    });
    var Vc = nc(37923);
    const Ic = "postprocessVertexShader",
      rB = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    Vc.b.ShadersStore[Ic] || (Vc.b.ShadersStore[Ic] = rB);
    const uc = {
      name: Ic,
      shader: rB
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);