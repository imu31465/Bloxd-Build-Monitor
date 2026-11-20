export const id = 381;
export const ids = [381];
export const modules = {
  61008: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      proceduralVertexShaderWGSL: () => Eb
    });
    var Ab = Ub(38943);
    const Mb = "proceduralVertexShader",
      Tb = "attribute position: vec2f;varying vPosition: vec2f;varying vUV: vec2f;const madd: vec2f= vec2f(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vPosition=vertexInputs.position;vertexOutputs.vUV=vertexInputs.position*madd+madd;vertexOutputs.position= vec4f(vertexInputs.position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    Ab.d.ShadersStoreWGSL[Mb] || (Ab.d.ShadersStoreWGSL[Mb] = Tb);
    const Eb = {
      name: Mb,
      shader: Tb
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);