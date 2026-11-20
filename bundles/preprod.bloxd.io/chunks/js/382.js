export const id = 382;
export const ids = [382];
export const modules = {
  61820: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      proceduralVertexShaderWGSL: () => mq
    });
    var Yq = gq(39617);
    const lq = "proceduralVertexShader",
      Oq = "attribute position: vec2f;varying vPosition: vec2f;varying vUV: vec2f;const madd: vec2f= vec2f(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vPosition=vertexInputs.position;vertexOutputs.vUV=vertexInputs.position*madd+madd;vertexOutputs.position= vec4f(vertexInputs.position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    Yq.d.ShadersStoreWGSL[lq] || (Yq.d.ShadersStoreWGSL[lq] = Oq);
    const mq = {
      name: lq,
      shader: Oq
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);