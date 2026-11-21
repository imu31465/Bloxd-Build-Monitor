export const id = 357;
export const ids = [357];
export const modules = {
  60891: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      postprocessVertexShaderWGSL: () => DQ
    });
    var LQ = wQ(39251);
    const qQ = "postprocessVertexShader",
      oQ = "attribute position: vec2<f32>;uniform scale: vec2<f32>;varying vUV: vec2<f32>;const madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vUV=(vertexInputs.position*madd+madd)*uniforms.scale;vertexOutputs.position=vec4(vertexInputs.position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    LQ.c.ShadersStoreWGSL[qQ] || (LQ.c.ShadersStoreWGSL[qQ] = oQ);
    const DQ = {
      name: qQ,
      shader: oQ
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);