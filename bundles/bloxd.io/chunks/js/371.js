export const id = 371;
export const ids = [371];
export const modules = {
  60119: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      proceduralVertexShaderWGSL: () => XJ
    });
    var FJ = ZJ(38658);
    const UJ = "proceduralVertexShader",
      eJ = "attribute position: vec2f;varying vPosition: vec2f;varying vUV: vec2f;const madd: vec2f= vec2f(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vPosition=vertexInputs.position;vertexOutputs.vUV=vertexInputs.position*madd+madd;vertexOutputs.position= vec4f(vertexInputs.position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    FJ.b.ShadersStoreWGSL[UJ] || (FJ.b.ShadersStoreWGSL[UJ] = eJ);
    const XJ = {
      name: UJ,
      shader: eJ
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);