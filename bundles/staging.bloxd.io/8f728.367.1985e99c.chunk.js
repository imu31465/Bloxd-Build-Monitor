export const id = 367;
export const ids = [367];
export const modules = {
  59766: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      proceduralVertexShader: () => uc
    });
    var Vc = nc(37923);
    const Ic = "proceduralVertexShader",
      rB = "attribute vec2 position;varying vec2 vPosition;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvPosition=position;vUV=position*madd+madd;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    Vc.b.ShadersStore[Ic] || (Vc.b.ShadersStore[Ic] = rB);
    const uc = {
      name: Ic,
      shader: rB
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);