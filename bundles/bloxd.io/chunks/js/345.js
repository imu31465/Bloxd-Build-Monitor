export const id = 345;
export const ids = [345];
export const modules = {
  60319: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      postprocessVertexShader: () => Oz
    });
    var Fz = sz(39041);
    const Wz = "postprocessVertexShader",
      Xz = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    Fz.e.ShadersStore[Wz] || (Fz.e.ShadersStore[Wz] = Xz);
    const Oz = {
      name: Wz,
      shader: Xz
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);