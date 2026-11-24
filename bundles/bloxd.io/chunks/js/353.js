export const id = 353;
export const ids = [353];
export const modules = {
  61329: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      postprocessVertexShader: () => xS
    });
    var tS = gS(39899);
    const bS = "postprocessVertexShader",
      XS = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    tS.c.ShadersStore[bS] || (tS.c.ShadersStore[bS] = XS);
    const xS = {
      name: bS,
      shader: XS
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);