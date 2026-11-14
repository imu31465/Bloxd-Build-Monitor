export const id = 341;
export const ids = [341];
export const modules = {
  59314: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      postprocessVertexShaderWGSL: () => uc
    });
    var Vc = nc(37923);
    const Ic = "postprocessVertexShader",
      rB = "attribute position: vec2<f32>;uniform scale: vec2<f32>;varying vUV: vec2<f32>;const madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vUV=(vertexInputs.position*madd+madd)*uniforms.scale;vertexOutputs.position=vec4(vertexInputs.position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    Vc.b.ShadersStoreWGSL[Ic] || (Vc.b.ShadersStoreWGSL[Ic] = rB);
    const uc = {
      name: Ic,
      shader: rB
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);