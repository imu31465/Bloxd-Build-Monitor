export const id = 356;
export const ids = [356];
export const modules = {
  60771: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      postprocessVertexShaderWGSL: () => PU
    });
    var tU = gU(39225);
    const pU = "postprocessVertexShader",
      EU = "attribute position: vec2<f32>;uniform scale: vec2<f32>;varying vUV: vec2<f32>;const madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vUV=(vertexInputs.position*madd+madd)*uniforms.scale;vertexOutputs.position=vec4(vertexInputs.position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    tU.d.ShadersStoreWGSL[pU] || (tU.d.ShadersStoreWGSL[pU] = EU);
    const PU = {
      name: pU,
      shader: EU
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);