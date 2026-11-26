export const id = 697;
export const ids = [697];
export const modules = {
  64720: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      proceduralVertexShaderWGSL: () => hH
    });
    var AH = LH(41138);
    const rH = "proceduralVertexShader",
      SH = "attribute position: vec2f;varying vPosition: vec2f;varying vUV: vec2f;const madd: vec2f= vec2f(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vPosition=vertexInputs.position;vertexOutputs.vUV=vertexInputs.position*madd+madd;vertexOutputs.position= vec4f(vertexInputs.position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    AH.c.ShadersStoreWGSL[rH] || (AH.c.ShadersStoreWGSL[rH] = SH);
    const hH = {
      name: rH,
      shader: SH
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);