export const id = 708;
export const ids = [708];
export const modules = {
  65353: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      proceduralVertexShader: () => Xd
    });
    var Wd = md(41785);
    const Fd = "proceduralVertexShader",
      Rd = "attribute vec2 position;varying vec2 vPosition;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvPosition=position;vUV=position*madd+madd;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    Wd.e.ShadersStore[Fd] || (Wd.e.ShadersStore[Fd] = Rd);
    const Xd = {
      name: Fd,
      shader: Rd
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);