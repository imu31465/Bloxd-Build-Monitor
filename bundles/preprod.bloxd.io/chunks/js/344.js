export const id = 344;
export const ids = [344];
export const modules = {
  59950: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      postprocessVertexShaderWGSL: () => Zy
    });
    var Uy = Wy(38319);
    const hy = "postprocessVertexShader",
      fy = "attribute position: vec2<f32>;uniform scale: vec2<f32>;varying vUV: vec2<f32>;const madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vUV=(vertexInputs.position*madd+madd)*uniforms.scale;vertexOutputs.position=vec4(vertexInputs.position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    Uy.e.ShadersStoreWGSL[hy] || (Uy.e.ShadersStoreWGSL[hy] = fy);
    const Zy = {
      name: hy,
      shader: fy
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);