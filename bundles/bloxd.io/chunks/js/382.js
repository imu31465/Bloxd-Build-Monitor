export const id = 382;
export const ids = [382];
export const modules = {
  61284: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      proceduralVertexShaderWGSL: () => Ub
    });
    var Bb = hb(39308);
    const Ob = "proceduralVertexShader",
      Gb = "attribute position: vec2f;varying vPosition: vec2f;varying vUV: vec2f;const madd: vec2f= vec2f(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vPosition=vertexInputs.position;vertexOutputs.vUV=vertexInputs.position*madd+madd;vertexOutputs.position= vec4f(vertexInputs.position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    Bb.e.ShadersStoreWGSL[Ob] || (Bb.e.ShadersStoreWGSL[Ob] = Gb);
    const Ub = {
      name: Ob,
      shader: Gb
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);