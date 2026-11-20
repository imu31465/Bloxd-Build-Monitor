export const id = 381;
export const ids = [381];
export const modules = {
  61291: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      proceduralVertexShaderWGSL: () => Tb
    });
    var kb = sb(39267);
    const Wb = "proceduralVertexShader",
      ab = "attribute position: vec2f;varying vPosition: vec2f;varying vUV: vec2f;const madd: vec2f= vec2f(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vPosition=vertexInputs.position;vertexOutputs.vUV=vertexInputs.position*madd+madd;vertexOutputs.position= vec4f(vertexInputs.position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    kb.d.ShadersStoreWGSL[Wb] || (kb.d.ShadersStoreWGSL[Wb] = ab);
    const Tb = {
      name: Wb,
      shader: ab
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);