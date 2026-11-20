export const id = 357;
export const ids = [357];
export const modules = {
  61371: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      postprocessVertexShaderWGSL: () => mq
    });
    var Yq = gq(39617);
    const lq = "postprocessVertexShader",
      Oq = "attribute position: vec2<f32>;uniform scale: vec2<f32>;varying vUV: vec2<f32>;const madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vUV=(vertexInputs.position*madd+madd)*uniforms.scale;vertexOutputs.position=vec4(vertexInputs.position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    Yq.d.ShadersStoreWGSL[lq] || (Yq.d.ShadersStoreWGSL[lq] = Oq);
    const mq = {
      name: lq,
      shader: Oq
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);