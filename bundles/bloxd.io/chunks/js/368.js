export const id = 368;
export const ids = [368];
export const modules = {
  61548: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      postprocessVertexShaderWGSL: () => IB
    });
    var QB = zB(39932);
    const nB = "postprocessVertexShader",
      dB = "attribute position: vec2<f32>;uniform scale: vec2<f32>;varying vUV: vec2<f32>;const madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vUV=(vertexInputs.position*madd+madd)*uniforms.scale;vertexOutputs.position=vec4(vertexInputs.position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    QB.e.ShadersStoreWGSL[nB] || (QB.e.ShadersStoreWGSL[nB] = dB);
    const IB = {
      name: nB,
      shader: dB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);