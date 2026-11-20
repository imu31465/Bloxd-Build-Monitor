export const id = 382;
export const ids = [382];
export const modules = {
  61264: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      proceduralVertexShaderWGSL: () => OT
    });
    var lT = cT(39474);
    const MT = "proceduralVertexShader",
      KT = "attribute position: vec2f;varying vPosition: vec2f;varying vUV: vec2f;const madd: vec2f= vec2f(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vPosition=vertexInputs.position;vertexOutputs.vUV=vertexInputs.position*madd+madd;vertexOutputs.position= vec4f(vertexInputs.position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    lT.d.ShadersStoreWGSL[MT] || (lT.d.ShadersStoreWGSL[MT] = KT);
    const OT = {
      name: MT,
      shader: KT
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);