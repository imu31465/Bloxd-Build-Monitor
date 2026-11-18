export const id = 333;
export const ids = [333];
export const modules = {
  59697: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      postprocessVertexShader: () => Zy
    });
    var Uy = Wy(38319);
    const hy = "postprocessVertexShader",
      fy = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    Uy.e.ShadersStore[hy] || (Uy.e.ShadersStore[hy] = fy);
    const Zy = {
      name: hy,
      shader: fy
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);