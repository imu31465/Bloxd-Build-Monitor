export const id = 371;
export const ids = [371];
export const modules = {
  60403: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      proceduralVertexShaderWGSL: () => lB
    });
    var VB = dB(38595);
    const yB = "proceduralVertexShader",
      pB = "attribute position: vec2f;varying vPosition: vec2f;varying vUV: vec2f;const madd: vec2f= vec2f(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vPosition=vertexInputs.position;vertexOutputs.vUV=vertexInputs.position*madd+madd;vertexOutputs.position= vec4f(vertexInputs.position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    VB.e.ShadersStoreWGSL[yB] || (VB.e.ShadersStoreWGSL[yB] = pB);
    const lB = {
      name: yB,
      shader: pB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);