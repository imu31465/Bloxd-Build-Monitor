export const id = 388;
export const ids = [388];
export const modules = {
  61291: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      proceduralVertexShaderWGSL: () => bk
    });
    var Dk = ik(39412);
    const fk = "proceduralVertexShader",
      Sk = "attribute position: vec2f;varying vPosition: vec2f;varying vUV: vec2f;const madd: vec2f= vec2f(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vPosition=vertexInputs.position;vertexOutputs.vUV=vertexInputs.position*madd+madd;vertexOutputs.position= vec4f(vertexInputs.position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    Dk.d.ShadersStoreWGSL[fk] || (Dk.d.ShadersStoreWGSL[fk] = Sk);
    const bk = {
      name: fk,
      shader: Sk
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);