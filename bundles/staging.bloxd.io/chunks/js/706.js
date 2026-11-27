export const id = 706;
export const ids = [706];
export const modules = {
  64749: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      proceduralVertexShaderWGSL: () => ZR
    });
    var yR = GR(41387);
    const tR = "proceduralVertexShader",
      uR = "attribute position: vec2f;varying vPosition: vec2f;varying vUV: vec2f;const madd: vec2f= vec2f(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vPosition=vertexInputs.position;vertexOutputs.vUV=vertexInputs.position*madd+madd;vertexOutputs.position= vec4f(vertexInputs.position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    yR.b.ShadersStoreWGSL[tR] || (yR.b.ShadersStoreWGSL[tR] = uR);
    const ZR = {
      name: tR,
      shader: uR
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);