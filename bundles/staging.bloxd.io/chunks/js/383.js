export const id = 383;
export const ids = [383];
export const modules = {
  61295: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      proceduralVertexShader: () => gv
    });
    var hv = Pv(39162);
    const Sv = "proceduralVertexShader",
      ev = "attribute vec2 position;varying vec2 vPosition;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvPosition=position;vUV=position*madd+madd;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    hv.d.ShadersStore[Sv] || (hv.d.ShadersStore[Sv] = ev);
    const gv = {
      name: Sv,
      shader: ev
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);