export const id = 381;
export const ids = [381];
export const modules = {
  61061: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      proceduralVertexShaderWGSL: () => fD
    });
    var ID = cD(39003);
    const pD = "proceduralVertexShader",
      iD = "attribute position: vec2f;varying vPosition: vec2f;varying vUV: vec2f;const madd: vec2f= vec2f(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vPosition=vertexInputs.position;vertexOutputs.vUV=vertexInputs.position*madd+madd;vertexOutputs.position= vec4f(vertexInputs.position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    ID.e.ShadersStoreWGSL[pD] || (ID.e.ShadersStoreWGSL[pD] = iD);
    const fD = {
      name: pD,
      shader: iD
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);