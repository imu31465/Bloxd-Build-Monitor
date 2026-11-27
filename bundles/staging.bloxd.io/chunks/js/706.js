export const id = 706;
export const ids = [706];
export const modules = {
  65029: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      proceduralVertexShaderWGSL: () => PW
    });
    var mW = OW(41392);
    const EW = "proceduralVertexShader",
      NW = "attribute position: vec2f;varying vPosition: vec2f;varying vUV: vec2f;const madd: vec2f= vec2f(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vPosition=vertexInputs.position;vertexOutputs.vUV=vertexInputs.position*madd+madd;vertexOutputs.position= vec4f(vertexInputs.position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    mW.c.ShadersStoreWGSL[EW] || (mW.c.ShadersStoreWGSL[EW] = NW);
    const PW = {
      name: EW,
      shader: NW
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);