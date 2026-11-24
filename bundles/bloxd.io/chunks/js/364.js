export const id = 364;
export const ids = [364];
export const modules = {
  61157: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      postprocessVertexShaderWGSL: () => rD
    });
    var pD = wD(39776);
    const sD = "postprocessVertexShader",
      KD = "attribute position: vec2<f32>;uniform scale: vec2<f32>;varying vUV: vec2<f32>;const madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vUV=(vertexInputs.position*madd+madd)*uniforms.scale;vertexOutputs.position=vec4(vertexInputs.position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    pD.e.ShadersStoreWGSL[sD] || (pD.e.ShadersStoreWGSL[sD] = KD);
    const rD = {
      name: sD,
      shader: KD
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);