export const id = 707;
export const ids = [707];
export const modules = {
  65011: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      proceduralVertexShaderWGSL: () => Vb
    });
    var eb = Mb(41518);
    const Hb = "proceduralVertexShader",
      pb = "attribute position: vec2f;varying vPosition: vec2f;varying vUV: vec2f;const madd: vec2f= vec2f(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vPosition=vertexInputs.position;vertexOutputs.vUV=vertexInputs.position*madd+madd;vertexOutputs.position= vec4f(vertexInputs.position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    eb.e.ShadersStoreWGSL[Hb] || (eb.e.ShadersStoreWGSL[Hb] = pb);
    const Vb = {
      name: Hb,
      shader: pb
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);