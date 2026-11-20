export const id = 345;
export const ids = [345];
export const modules = {
  60585: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      postprocessVertexShader: () => Tb
    });
    var kb = sb(39267);
    const Wb = "postprocessVertexShader",
      ab = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    kb.d.ShadersStore[Wb] || (kb.d.ShadersStore[Wb] = ab);
    const Tb = {
      name: Wb,
      shader: ab
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);