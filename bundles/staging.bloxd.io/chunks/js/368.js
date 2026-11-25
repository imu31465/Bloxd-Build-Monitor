export const id = 368;
export const ids = [368];
export const modules = {
  61951: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      postprocessVertexShaderWGSL: () => yG
    });
    var wG = ZG(40237);
    const SG = "postprocessVertexShader",
      LG = "attribute position: vec2<f32>;uniform scale: vec2<f32>;varying vUV: vec2<f32>;const madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vUV=(vertexInputs.position*madd+madd)*uniforms.scale;vertexOutputs.position=vec4(vertexInputs.position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    wG.e.ShadersStoreWGSL[SG] || (wG.e.ShadersStoreWGSL[SG] = LG);
    const yG = {
      name: SG,
      shader: LG
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);