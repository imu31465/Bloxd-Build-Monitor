export const id = 345;
export const ids = [345];
export const modules = {
  60333: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      postprocessVertexShader: () => lz
    });
    var Ez = bz(39033);
    const nz = "postprocessVertexShader",
      iz = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    Ez.e.ShadersStore[nz] || (Ez.e.ShadersStore[nz] = iz);
    const lz = {
      name: nz,
      shader: iz
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);