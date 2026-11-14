export const id = 366;
export const ids = [366];
export const modules = {
  59764: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      proceduralVertexShaderWGSL: () => uc
    });
    var Vc = nc(37923);
    const Ic = "proceduralVertexShader",
      rB = "attribute position: vec2f;varying vPosition: vec2f;varying vUV: vec2f;const madd: vec2f= vec2f(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vPosition=vertexInputs.position;vertexOutputs.vUV=vertexInputs.position*madd+madd;vertexOutputs.position= vec4f(vertexInputs.position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    Vc.b.ShadersStoreWGSL[Ic] || (Vc.b.ShadersStoreWGSL[Ic] = rB);
    const uc = {
      name: Ic,
      shader: rB
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);