export const id = 368;
export const ids = [368];
export const modules = {
  61270: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      postprocessVertexShaderWGSL: () => gT
    });
    var WT = mT(39934);
    const zT = "postprocessVertexShader",
      MT = "attribute position: vec2<f32>;uniform scale: vec2<f32>;varying vUV: vec2<f32>;const madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vUV=(vertexInputs.position*madd+madd)*uniforms.scale;vertexOutputs.position=vec4(vertexInputs.position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    WT.d.ShadersStoreWGSL[zT] || (WT.d.ShadersStoreWGSL[zT] = MT);
    const gT = {
      name: zT,
      shader: MT
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);