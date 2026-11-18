export const id = 369;
export const ids = [369];
export const modules = {
  60447: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      proceduralVertexShaderWGSL: () => Zy
    });
    var Uy = Wy(38319);
    const hy = "proceduralVertexShader",
      fy = "attribute position: vec2f;varying vPosition: vec2f;varying vUV: vec2f;const madd: vec2f= vec2f(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vPosition=vertexInputs.position;vertexOutputs.vUV=vertexInputs.position*madd+madd;vertexOutputs.position= vec4f(vertexInputs.position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    Uy.e.ShadersStoreWGSL[hy] || (Uy.e.ShadersStoreWGSL[hy] = fy);
    const Zy = {
      name: hy,
      shader: fy
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);