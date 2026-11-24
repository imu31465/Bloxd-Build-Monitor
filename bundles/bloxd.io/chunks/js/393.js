export const id = 393;
export const ids = [393];
export const modules = {
  62032: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      proceduralVertexShaderWGSL: () => IB
    });
    var QB = zB(39932);
    const nB = "proceduralVertexShader",
      dB = "attribute position: vec2f;varying vPosition: vec2f;varying vUV: vec2f;const madd: vec2f= vec2f(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vPosition=vertexInputs.position;vertexOutputs.vUV=vertexInputs.position*madd+madd;vertexOutputs.position= vec4f(vertexInputs.position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    QB.e.ShadersStoreWGSL[nB] || (QB.e.ShadersStoreWGSL[nB] = dB);
    const IB = {
      name: nB,
      shader: dB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);