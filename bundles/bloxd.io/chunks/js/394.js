export const id = 394;
export const ids = [394];
export const modules = {
  62433: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      proceduralVertexShader: () => yG
    });
    var wG = ZG(40237);
    const SG = "proceduralVertexShader",
      LG = "attribute vec2 position;varying vec2 vPosition;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvPosition=position;vUV=position*madd+madd;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    wG.e.ShadersStore[SG] || (wG.e.ShadersStore[SG] = LG);
    const yG = {
      name: SG,
      shader: LG
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);