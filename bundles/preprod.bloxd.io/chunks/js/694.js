export const id = 694;
export const ids = [694];
export const modules = {
  64551: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      proceduralVertexShaderWGSL: () => AU
    });
    var cU = zU(40961);
    const yU = "proceduralVertexShader",
      QU = "attribute position: vec2f;varying vPosition: vec2f;varying vUV: vec2f;const madd: vec2f= vec2f(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vPosition=vertexInputs.position;vertexOutputs.vUV=vertexInputs.position*madd+madd;vertexOutputs.position= vec4f(vertexInputs.position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    cU.b.ShadersStoreWGSL[yU] || (cU.b.ShadersStoreWGSL[yU] = QU);
    const AU = {
      name: yU,
      shader: QU
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);