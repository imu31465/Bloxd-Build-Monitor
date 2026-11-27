export const id = 671;
export const ids = [671];
export const modules = {
  64146: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      postprocessVertexShader: () => ZR
    });
    var yR = GR(41387);
    const tR = "postprocessVertexShader",
      uR = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    yR.b.ShadersStore[tR] || (yR.b.ShadersStore[tR] = uR);
    const ZR = {
      name: tR,
      shader: uR
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);