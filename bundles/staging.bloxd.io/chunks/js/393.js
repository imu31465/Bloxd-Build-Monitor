export const id = 393;
export const ids = [393];
export const modules = {
  61867: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      proceduralVertexShaderWGSL: () => GB
    });
    var TB = ZB(39905);
    const JB = "proceduralVertexShader",
      oB = "attribute position: vec2f;varying vPosition: vec2f;varying vUV: vec2f;const madd: vec2f= vec2f(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vPosition=vertexInputs.position;vertexOutputs.vUV=vertexInputs.position*madd+madd;vertexOutputs.position= vec4f(vertexInputs.position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    TB.c.ShadersStoreWGSL[JB] || (TB.c.ShadersStoreWGSL[JB] = oB);
    const GB = {
      name: JB,
      shader: oB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);