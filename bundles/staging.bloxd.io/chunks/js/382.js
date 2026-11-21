export const id = 382;
export const ids = [382];
export const modules = {
  61375: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      proceduralVertexShaderWGSL: () => DQ
    });
    var LQ = wQ(39251);
    const qQ = "proceduralVertexShader",
      oQ = "attribute position: vec2f;varying vPosition: vec2f;varying vUV: vec2f;const madd: vec2f= vec2f(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vPosition=vertexInputs.position;vertexOutputs.vUV=vertexInputs.position*madd+madd;vertexOutputs.position= vec4f(vertexInputs.position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    LQ.c.ShadersStoreWGSL[qQ] || (LQ.c.ShadersStoreWGSL[qQ] = oQ);
    const DQ = {
      name: qQ,
      shader: oQ
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);