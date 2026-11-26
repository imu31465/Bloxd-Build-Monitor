export const id = 697;
export const ids = [697];
export const modules = {
  64437: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      proceduralVertexShaderWGSL: () => oB
    });
    var YB = GB(40864);
    const DB = "proceduralVertexShader",
      QB = "attribute position: vec2f;varying vPosition: vec2f;varying vUV: vec2f;const madd: vec2f= vec2f(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vPosition=vertexInputs.position;vertexOutputs.vUV=vertexInputs.position*madd+madd;vertexOutputs.position= vec4f(vertexInputs.position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    YB.b.ShadersStoreWGSL[DB] || (YB.b.ShadersStoreWGSL[DB] = QB);
    const oB = {
      name: DB,
      shader: QB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);