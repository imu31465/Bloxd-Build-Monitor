export const id = 381;
export const ids = [381];
export const modules = {
  60741: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      proceduralVertexShaderWGSL: () => WT
    });
    var iT = IT(38617);
    const zT = "proceduralVertexShader",
      kT = "attribute position: vec2f;varying vPosition: vec2f;varying vUV: vec2f;const madd: vec2f= vec2f(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vPosition=vertexInputs.position;vertexOutputs.vUV=vertexInputs.position*madd+madd;vertexOutputs.position= vec4f(vertexInputs.position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    iT.c.ShadersStoreWGSL[zT] || (iT.c.ShadersStoreWGSL[zT] = kT);
    const WT = {
      name: zT,
      shader: kT
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);