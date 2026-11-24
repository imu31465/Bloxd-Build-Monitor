export const id = 394;
export const ids = [394];
export const modules = {
  62112: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      proceduralVertexShader: () => mt
    });
    var Ot = Vt(40061);
    const qt = "proceduralVertexShader",
      Dt = "attribute vec2 position;varying vec2 vPosition;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvPosition=position;vUV=position*madd+madd;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    Ot.b.ShadersStore[qt] || (Ot.b.ShadersStore[qt] = Dt);
    const mt = {
      name: qt,
      shader: Dt
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);