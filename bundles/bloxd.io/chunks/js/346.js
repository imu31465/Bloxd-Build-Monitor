export const id = 346;
export const ids = [346];
export const modules = {
  59951: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      postprocessVertexShaderWGSL: () => lB
    });
    var VB = dB(38595);
    const yB = "postprocessVertexShader",
      pB = "attribute position: vec2<f32>;uniform scale: vec2<f32>;varying vUV: vec2<f32>;const madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vUV=(vertexInputs.position*madd+madd)*uniforms.scale;vertexOutputs.position=vec4(vertexInputs.position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    VB.e.ShadersStoreWGSL[yB] || (VB.e.ShadersStoreWGSL[yB] = pB);
    const lB = {
      name: yB,
      shader: pB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);