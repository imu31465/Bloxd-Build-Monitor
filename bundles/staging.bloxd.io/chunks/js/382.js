export const id = 382;
export const ids = [382];
export const modules = {
  61726: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      proceduralVertexShader: () => mu
    });
    var Eu = yu(39403);
    const Ku = "proceduralVertexShader",
      Qu = "attribute vec2 position;varying vec2 vPosition;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvPosition=position;vUV=position*madd+madd;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    Eu.e.ShadersStore[Ku] || (Eu.e.ShadersStore[Ku] = Qu);
    const mu = {
      name: Ku,
      shader: Qu
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);