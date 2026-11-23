export const id = 389;
export const ids = [389];
export const modules = {
  61521: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      proceduralVertexShaderWGSL: () => nC
    });
    var QC = ZC(39674);
    const wC = "proceduralVertexShader",
      bC = "attribute position: vec2f;varying vPosition: vec2f;varying vUV: vec2f;const madd: vec2f= vec2f(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vPosition=vertexInputs.position;vertexOutputs.vUV=vertexInputs.position*madd+madd;vertexOutputs.position= vec4f(vertexInputs.position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    QC.b.ShadersStoreWGSL[wC] || (QC.b.ShadersStoreWGSL[wC] = bC);
    const nC = {
      name: wC,
      shader: bC
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);