export const id = 393;
export const ids = [393];
export const modules = {
  61741: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      proceduralVertexShaderWGSL: () => gT
    });
    var WT = mT(39934);
    const zT = "proceduralVertexShader",
      MT = "attribute position: vec2f;varying vPosition: vec2f;varying vUV: vec2f;const madd: vec2f= vec2f(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vPosition=vertexInputs.position;vertexOutputs.vUV=vertexInputs.position*madd+madd;vertexOutputs.position= vec4f(vertexInputs.position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    WT.d.ShadersStoreWGSL[zT] || (WT.d.ShadersStoreWGSL[zT] = MT);
    const gT = {
      name: zT,
      shader: MT
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);