export const id = 370;
export const ids = [370];
export const modules = {
  60455: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      proceduralVertexShader: () => Zy
    });
    var Uy = Wy(38319);
    const hy = "proceduralVertexShader",
      fy = "attribute vec2 position;varying vec2 vPosition;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvPosition=position;vUV=position*madd+madd;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    Uy.e.ShadersStore[hy] || (Uy.e.ShadersStore[hy] = fy);
    const Zy = {
      name: hy,
      shader: fy
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);