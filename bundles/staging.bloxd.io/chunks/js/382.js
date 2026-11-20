export const id = 382;
export const ids = [382];
export const modules = {
  61013: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      proceduralVertexShader: () => Oz
    });
    var Fz = sz(39041);
    const Wz = "proceduralVertexShader",
      Xz = "attribute vec2 position;varying vec2 vPosition;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvPosition=position;vUV=position*madd+madd;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    Fz.e.ShadersStore[Wz] || (Fz.e.ShadersStore[Wz] = Xz);
    const Oz = {
      name: Wz,
      shader: Xz
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);