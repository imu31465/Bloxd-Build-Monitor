export const id = 356;
export const ids = [356];
export const modules = {
  61248: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      postprocessVertexShaderWGSL: () => mu
    });
    var Eu = yu(39403);
    const Ku = "postprocessVertexShader",
      Qu = "attribute position: vec2<f32>;uniform scale: vec2<f32>;varying vUV: vec2<f32>;const madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vUV=(vertexInputs.position*madd+madd)*uniforms.scale;vertexOutputs.position=vec4(vertexInputs.position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    Eu.e.ShadersStoreWGSL[Ku] || (Eu.e.ShadersStoreWGSL[Ku] = Qu);
    const mu = {
      name: Ku,
      shader: Qu
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);