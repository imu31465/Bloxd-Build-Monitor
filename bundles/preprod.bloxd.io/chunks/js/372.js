export const id = 372;
export const ids = [372];
export const modules = {
  61666: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      postprocessVertexShaderWGSL: () => zQ
    });
    var wQ = XQ(40126);
    const qQ = "postprocessVertexShader",
      TQ = "attribute position: vec2<f32>;uniform scale: vec2<f32>;varying vUV: vec2<f32>;const madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vUV=(vertexInputs.position*madd+madd)*uniforms.scale;vertexOutputs.position=vec4(vertexInputs.position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    wQ.b.ShadersStoreWGSL[qQ] || (wQ.b.ShadersStoreWGSL[qQ] = TQ);
    const zQ = {
      name: qQ,
      shader: TQ
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);