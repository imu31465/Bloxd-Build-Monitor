export const id = 390;
export const ids = [390];
export const modules = {
  61976: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      proceduralVertexShader: () => xm
    });
    var hm = fm(39960);
    const Am = "proceduralVertexShader",
      am = "attribute vec2 position;varying vec2 vPosition;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvPosition=position;vUV=position*madd+madd;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    hm.e.ShadersStore[Am] || (hm.e.ShadersStore[Am] = am);
    const xm = {
      name: Am,
      shader: am
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);