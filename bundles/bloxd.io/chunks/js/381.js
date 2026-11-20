export const id = 381;
export const ids = [381];
export const modules = {
  61721: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      proceduralVertexShaderWGSL: () => mu
    });
    var Eu = yu(39403);
    const Ku = "proceduralVertexShader",
      Qu = "attribute position: vec2f;varying vPosition: vec2f;varying vUV: vec2f;const madd: vec2f= vec2f(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vPosition=vertexInputs.position;vertexOutputs.vUV=vertexInputs.position*madd+madd;vertexOutputs.position= vec4f(vertexInputs.position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    Eu.e.ShadersStoreWGSL[Ku] || (Eu.e.ShadersStoreWGSL[Ku] = Qu);
    const mu = {
      name: Ku,
      shader: Qu
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);