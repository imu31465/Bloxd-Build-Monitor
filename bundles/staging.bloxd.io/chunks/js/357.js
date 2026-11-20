export const id = 357;
export const ids = [357];
export const modules = {
  60837: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      postprocessVertexShaderWGSL: () => Ub
    });
    var Bb = hb(39308);
    const Ob = "postprocessVertexShader",
      Gb = "attribute position: vec2<f32>;uniform scale: vec2<f32>;varying vUV: vec2<f32>;const madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vUV=(vertexInputs.position*madd+madd)*uniforms.scale;vertexOutputs.position=vec4(vertexInputs.position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    Bb.e.ShadersStoreWGSL[Ob] || (Bb.e.ShadersStoreWGSL[Ob] = Gb);
    const Ub = {
      name: Ob,
      shader: Gb
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);